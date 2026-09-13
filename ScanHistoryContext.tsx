import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type ScanRecord = {
  id: string;
  crop: string;
  disease: string;
  confidence: number;
  date: string;
};

type ScanHistoryContextType = {
  scans: ScanRecord[];
  addScan: (scan: ScanRecord) => void;
};

const ScanHistoryContext = createContext<ScanHistoryContextType | undefined>(
  undefined
);

export function ScanHistoryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [scans, setScans] = useState<ScanRecord[]>([]);

  const addScan = (scan: ScanRecord) => {
    setScans((previous) => [scan, ...previous]);
  };

  return (
    <ScanHistoryContext.Provider value={{ scans, addScan }}>
      {children}
    </ScanHistoryContext.Provider>
  );
}

export function useScanHistory() {
  const context = useContext(ScanHistoryContext);

  if (!context) {
    throw new Error(
      "useScanHistory must be used inside ScanHistoryProvider"
    );
  }

  return context;
}