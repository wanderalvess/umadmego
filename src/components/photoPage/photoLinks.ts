import SabadoNoite from '@/assets/images/photo/1.jpg';
import DomingoManha from '@/assets/images/photo/2.jpg';
import DomingoNoite from '@/assets/images/photo/3.jpg';
import SegundaManha from '@/assets/images/photo/4.jpg';
import SegundaNoite from '@/assets/images/photo/5.jpg';
import TercaManha from '@/assets/images/photo/6.jpg';
import TercaNoite from '@/assets/images/photo/7.jpg';
import PreCongresso from '@/assets/images/photo/8.jpg';
import Vigilia from '@/assets/images/photo/9.jpg';
import Esquenta from '@/assets/images/photo/10.jpg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const photoLinks = [
  {
    day: 'Pré Congresso',
    link: 'https://drive.google.com/drive/folders/1WI5KDCLUTN17BCMQtLMp32AWgD1iqLyK',
    preview: PreCongresso,
  },
  {
    day: 'Vigília',
    link: 'https://drive.google.com/drive/folders/1BHuOhR_vopHCvh5wYbWgdN0_xuwZa4Du',
    preview: Vigilia,
  },
  {
    day: 'Esquenta',
    link: 'https://drive.google.com/drive/folders/1_niMO66ySsTv46PVl3we5NTj64ttJvzI',
    preview: Esquenta,
  },
  {
    day: 'Sábado - Noite',
    link: 'https://photos.app.goo.gl/TG8dm5jJjPHrnojB8',
    preview: SabadoNoite,
  },
  {
    day: 'Domingo - Manhã',
    link: 'https://photos.app.goo.gl/FhrR68EhQqGrgC2X6',
    preview: DomingoManha,
  },
  {
    day: 'Domingo - Noite',
    link: 'https://photos.app.goo.gl/Q7qmdoNSiHyGCgmn6',
    preview: DomingoNoite,
  },
  {
    day: 'Segunda - Manhã',
    link: 'https://photos.app.goo.gl/qLryXfdHTbKNzvBD8',
    preview: SegundaManha,
  },
  {
    day: 'Segunda - Noite',
    link: 'https://photos.app.goo.gl/mRmEwB6yhy6KVtwm6',
    preview: SegundaNoite,
  },
  {
    day: 'Terça - Manhã',
    link: 'https://photos.app.goo.gl/FqXJVMJCXcvJHvwB9',
    preview: TercaManha,
  },
  {
    day: 'Terça - Noite',
    link: 'https://photos.app.goo.gl/kz8dD3sBu83npPsh8',
    preview: TercaNoite,
  },
];
export default photoLinks;
