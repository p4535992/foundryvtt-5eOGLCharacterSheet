import { MySettings, MODULE_ID } from '../constants';

export const registerSettings = function () {
  CONFIG[MODULE_ID] = { debug: false };

  // Register any custom module settings here
  game.settings.register(MODULE_ID, MySettings.limitActionsToCantrips, {
    name: 'Limit Actions to Cantrips',
    default: false,
    type: Boolean,
    scope: 'client',
    config: true,
    hint: 'Instead of showing all spells that deal damage in the Actions area, limit it to only cantrips.',
  });

  game.settings.register(MODULE_ID, MySettings.showIconsOnInventoryList, {
    name: 'Add icons to inventory',
    default: false,
    type: Boolean,
    scope: 'client',
    config: true,
    hint: 'Add the icons to the items on the inventory list.',
  });
};
