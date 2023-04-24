export interface FlightAssignment {
  flightNumber: string | null;
  type: "onload" | "offload";
  assist: boolean;
  arrivingTime: Date | null;
  departureTime: Date | null;
  gate: string | null;
  necessaryEquipment: NeccessaryEquipment;
  message: string | null;
}

export interface NeccessaryEquipment {
  beltloader: number | null;
  loader: number | null;
  pushback: boolean | null;
  ld3: number | null;
  ld9: number | null;
  carts: number | null;
}

export interface AddFlightFormProps {
  open: boolean;
  onClose: () => void;
}
