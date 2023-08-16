import FormComponent from "@/components/general/form/form";

export default function Home() {
  return (
    <div className="pb-8"
      style={{
        backgroundImage: `url(https://www.xxride.com/wp-content/uploads/2021/09/hero02-scaled.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <FormComponent />
    </div>
  )
}
