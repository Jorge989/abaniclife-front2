import ReactGA from "react-ga4";

interface TrackEventParams {
  category: string;
  action: string;
  label?: string;
}

export const trackEvent = ({ category, action, label }: TrackEventParams) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
