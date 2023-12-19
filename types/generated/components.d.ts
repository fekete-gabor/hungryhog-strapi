import type { Schema, Attribute } from '@strapi/strapi';

export interface DayStartDay extends Schema.Component {
  collectionName: 'components_day_start_days';
  info: {
    displayName: 'day';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    day_start: Attribute.String;
    day_end: Attribute.String;
    hour_start: Attribute.String;
    hour_end: Attribute.String;
  };
}

export interface IngredientIngredients extends Schema.Component {
  collectionName: 'components_ingredient_ingredients';
  info: {
    displayName: 'ingredients';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    ingredients: Attribute.String & Attribute.Required;
  };
}

export interface PricePrice extends Schema.Component {
  collectionName: 'components_price_prices';
  info: {
    displayName: 'price';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    size: Attribute.String;
    price: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'day-start.day': DayStartDay;
      'ingredient.ingredients': IngredientIngredients;
      'price.price': PricePrice;
    }
  }
}
