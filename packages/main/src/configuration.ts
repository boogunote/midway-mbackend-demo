import { Configuration } from '@midwayjs/decorator';

@Configuration({
  imports: [
    'midway-subpackage-user',
    'midway-subpackage-book'
  ]
})
export class ContainerConfiguration {
}
