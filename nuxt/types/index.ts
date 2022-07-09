import { FunctionalComponent } from 'vue';

export interface SecondaryFeature {
  name: string;
  summary: string;
  description: string;
  image: string;
  imageFallback: string;
  icon: FunctionalComponent;
}
