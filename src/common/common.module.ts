import {Global, Module} from '@nestjs/common';
import { IT } from 'src/injection_token_config';
import { v4 as uuidv4 } from 'uuid';

const CommonProvider = {
  provide: IT.COMMON_MODULE,
  useValue: uuidv4,
};
@Global()
@Module({
  providers: [CommonProvider],
  exports: [CommonProvider],
})
export class CommonModule {}
