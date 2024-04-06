import { MaskContainer } from "./ui/svg-mask-effect";


export function Maskedcontainer() {
  return (
    <div className='h-[40rem] w-full flex items-center justify-center  overflow-hidden'>
      <MaskContainer
        revealText={
          <p className='max-w-4xl mx-auto text-slate-800 text-center  text-[24px] font-bold'>
            I've embarked on numerous projects throughout the years, but these
            are the ones I hold closest to my heart. Many of them are
            open-source, so if you come across something that piques your
            interest, feel free to explore the codebase and contribute your
            ideas for further enhancements. Your collaboration is highly valued!
            <br />
            <br />
            <i class='fa-solid fa-arrow-down-long fa-bounce'></i>
          </p>
        }
        className='h-[30rem] border rounded-md'
      >
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my{' '}
        <span className='text-red-500'>Heart</span> . Many of them are
        open-source, so if you come across something that piques your interest,
        feel free to explore the codebase and contribute your ideas for further
        enhancements.{' '}
        <a href='/contact' className='text-red-500'>
          Contact me!
        </a>
        <br />
        <br />
        <i class='fa-solid fa-arrow-down-long fa-bounce'></i>
      </MaskContainer>
    </div>
  );
}