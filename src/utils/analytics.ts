import ReactGA from "react-ga4";

interface TrackEventParams {
  name: string; // nome do evento no GA4
  category?: string;
  action?: string;
  label?: string;
}

export const trackEvent = ({
  name,
  category,
  action,
  label,
}: TrackEventParams) => {
  ReactGA.event(name, {
    category,
    action,
    label,
  });
};
