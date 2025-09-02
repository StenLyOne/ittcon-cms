import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'ui.stat', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsChoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_chooses';
  info: {
    displayName: 'choose';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.sard-sategory', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 2;
        },
        number
      >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.button', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFrequentlyAskedQuestions
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_frequently_asked_questions';
  info: {
    displayName: 'Frequently Asked Questions';
  };
  attributes: {
    questions: Schema.Attribute.Component<'ui.faq', true> &
      Schema.Attribute.Required;
    sub_title: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    ctas: Schema.Attribute.Component<'ui.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    media: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPartners extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.sard-sategory', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSolutions extends Struct.ComponentSchema {
  collectionName: 'components_sections_solutions';
  info: {
    displayName: 'solutions';
  };
  attributes: {
    sections: Schema.Attribute.Component<'ui.service-tiles', true>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['white', 'blue']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'white'>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['default', 'arrow', 'border']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface UiFaq extends Struct.ComponentSchema {
  collectionName: 'components_ui_faqs';
  info: {
    displayName: 'question ';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiImage extends Struct.ComponentSchema {
  collectionName: 'components_ui_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface UiSardSategory extends Struct.ComponentSchema {
  collectionName: 'components_ui_sard_sategories';
  info: {
    displayName: '\u0441ard-simple';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiServiceTiles extends Struct.ComponentSchema {
  collectionName: 'components_ui_service_tiles';
  info: {
    displayName: 'card-tiles';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    is_full_width: Schema.Attribute.Boolean & Schema.Attribute.Required;
    is_image: Schema.Attribute.Boolean & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiStat extends Struct.ComponentSchema {
  collectionName: 'components_ui_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    value: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 6;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about': SectionsAbout;
      'sections.choose': SectionsChoose;
      'sections.cta': SectionsCta;
      'sections.frequently-asked-questions': SectionsFrequentlyAskedQuestions;
      'sections.hero-section': SectionsHeroSection;
      'sections.partners': SectionsPartners;
      'sections.services': SectionsServices;
      'sections.solutions': SectionsSolutions;
      'ui.button': UiButton;
      'ui.faq': UiFaq;
      'ui.image': UiImage;
      'ui.sard-sategory': UiSardSategory;
      'ui.service-tiles': UiServiceTiles;
      'ui.stat': UiStat;
    }
  }
}
