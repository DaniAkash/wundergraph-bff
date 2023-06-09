export const LaunchPadDetails = ({
  attempted_launches,
  name,
  region,
  successful_launches,
  weather,
}: {
  name: string;
  region: string;
  successful_launches: number;
  attempted_launches: number;
  weather: string;
}) => {
  return (
    <div>
      <div>Launchpad Location: {name}</div>
      <div>Region: {region}</div>
      <div>
        Successful Launches: {successful_launches} / {attempted_launches}
      </div>
      <div>
        Weather Conditions:
        {weather}
      </div>
    </div>
  );
};
