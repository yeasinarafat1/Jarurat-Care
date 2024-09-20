/**
 * A simple loader component that displays a spinning circle.
 * The component is a div that takes up the full width and height of its parent.
 * It displays a spinning circle made up of a gray border and a blue top border.
 * The classnames are from Tailwind CSS.
 *
 * @returns {JSX.Element} a JSX element representing the loader component.
 */
export const Loader = (): JSX.Element => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};
