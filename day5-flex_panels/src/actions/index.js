export const OPEN_PANEL = 'OPEN_PANEL';

export function openPanel(index) {
  return {
    type: OPEN_PANEL,
    index: index
  };
};
