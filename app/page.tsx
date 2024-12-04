import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row text-xl">
      <div className="flex flex-col items-center w-full sm:w-1/6 sm:border-r-4 sm:border-[#0a493f] sm:p-2 sm:items-start gap-y-2">
        <h3 className="text-2xl font-bold">Навигация</h3>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor1">Добро пожаловать</a>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor2">Front</a>
        <a className="hover:bg-[#f29829] hover:text-white" href ="#anchor3">Back</a>
      </div>
      
      <div className="p-2 sm:w-5/6">
          <h2 id="anchor1" className="text-4xl font-bold">Добро пожаловать</h2>
          <div className="flex flex-col sm:flex-row gap-x-4">
            <div className="flex flex-col sm:w-3/4 p-2 gap-y-2">
              <p>
              Был Эру, Единый, кого в Арде называют Илуватар; и сперва создал он Айнур, Священных, что явились порождением его мысли, и пребывали они с ним прежде, чем создано было что-то еще. И обратился он к ним, и задал музыкальные темы; и запели они перед ним, и возрадовался он. Но долгое время пели они каждый в свой черед или несколько вместе, а остальные внимали молча; ибо каждому ясна была только та часть помыслов Илуватара, от которой происходил он сам; и лишь медленно приходили они к пониманию своих собратьев. Однако же, слушая, все более постигали они, и росли между ними согласие и гармония. 
              </p>
              <p>
              И вот созвал Илуватар воедино всех Айнур, и объявил им великую тему, раскрывая перед ними знания еще более глубокие и удивительные, нежели прежде; и поразили Айнур красота ее начала и великолепие завершения, и молча преклонились они перед Илуватаром.
              </p>
              <p>
              И рек им Илуватар: «Ту тему, что возвестил я вам, повелеваю теперь вам вместе воплотить в Великую Музыку. И как возжег я в вас Неугасимое Пламя, вольны вы явить свои силы, украсив эту тему, каждый – своими собственными помыслами и вариациями, ежели пожелаете. Я же буду слушать и радоваться, что через вас великая красота, пробудившись, стала песней».
              </p>
            </div>
            <img className="sm:w-1/4 aspect-[3/4] min-w-250px " src = "https://img.freepik.com/free-photo/kitty-with-monochrome-wall-behind-her_23-2148955134.jpg?w=996&t=st=1726207862~exp=1726208462~hmac=c53b3a349cc903b23ed57788098162dedd27112688e3bc5f0b5d26353c0ea712" alt = "Котик"/>
          </div>
          <h2 id="anchor2" className="text-4xl font-bold"> Front </h2>
            <p> Фронтенд (или клиентская часть) — это то, что видит пользователь. Он включает в себя все визуальные элементы веб-сайта или приложения: кнопки, формы, изображения и текст. Фронтенд разработчики используют языки разметки и стилизации, такие как HTML, CSS и JavaScript, чтобы создавать интерактивные и привлекательные интерфейсы. Основная задача фронтенда — обеспечить удобство использования и эстетическую привлекательность.</p>
            <video controls width="500">
              <source src="https://media.istockphoto.com/id/1298701454/ru/видео/кошка-отчаянно-покупает-или-продает-bitcoin-акции-фронт-зрения.mp4?s=mp4-640x640-is&k=20&c=5XGWh57mz2W5Qvei6cTWRwVQafdyn9ueTEFXh3utmCk=" />
            </video>
          <h2 id="anchor3" className="text-4xl font-bold"> Back </h2>
            <p>Бэкенд (или серверная часть) — это "за кулисами" веб-приложения. Он отвечает за обработку данных, управление пользователями и взаимодействие с базами данных. Бэкенд разработчики используют языки программирования, такие как Python, Ruby, Java или PHP, а также фреймворки и базы данных для создания логики приложения. Основная задача бэкенда — обеспечить стабильную работу приложения и безопасность данных.</p>
            <video controls width="500" className="pb-4">
              <source src="https://media.istockphoto.com/id/1161210058/ru/видео/портрет-высокогорного-прямо-пушистого-кота-с-длинными-волосами-и-круглыми-очками-в-неоновом.mp4?s=mp4-640x640-is&k=20&c=f5UYyiy77QB3XNSppKf1YjGHwTLY888wiOgxm4UPe8A=" />
            </video>
        </div>
    </div>
  );
}