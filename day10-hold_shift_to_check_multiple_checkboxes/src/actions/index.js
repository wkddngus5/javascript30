export const CLICK  = 'CLICK';

export function click(e, index) {
  console.log(e);
  return {
    type: CLICK,
    index: index,
    shiftKey: e.nativeEvent.shiftKey
  }
}