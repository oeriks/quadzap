class Element2D {
  element: HTMLElement;
  jquery_element: JQuery;

  outOfBounds(compElement: Element2D) {
    var elementBounds = this.element.getBoundingClientRect();
    var compElementBounds = compElement.element.getBoundingClientRect();
    if (elementBounds.top < compElementBounds.top)
      return true;
    else if (elementBounds.right > compElementBounds.right)
      return true;
    else if (elementBounds.bottom > compElementBounds.bottom)
      return true;
    else if (elementBounds.left < compElementBounds.left)
      return true;
    else
      return false;
  }

}
