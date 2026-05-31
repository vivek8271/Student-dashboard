type Props = {
  children: React.ReactNode;
};

export default function BentoGrid({
  children,
}: Props) {
  return (
    <section
      className="
        grid
        auto-rows-[180px]
        gap-4

        grid-cols-1

        md:grid-cols-2

        xl:grid-cols-4
      "
    >
      {children}
    </section>
  );
}