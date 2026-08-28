__d(
  "hasInteractiveAncestor",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "button",
        "dialog",
        "select",
        "input",
        "textarea",
        "a",
        "iframe",
        "embed",
        "label",
        '[role="button"]',
        '[role="checkbox"]',
        '[role="combobox"]',
        '[role="dialog"]',
        '[role="link"]',
        '[role="listbox"]',
        '[role="menuitem"]',
        '[role="menuitemcheckbox"]',
        '[role="menuitemradio"]',
        '[role="option"]',
        '[role="radio"]',
        '[role="scrollbar"]',
        '[role="searchbox"]',
        '[role="slider"]',
        '[role="spinbutton"]',
        '[role="switch"]',
        '[role="tab"]',
        '[role="tablist"]',
        '[role="textbox"]',
        '[role="treeitem"]',
        "[data-pressable-container]",
      ].join(","),
      l = ['[aria-readonly="true"]'].join(",");
    function s(t, n) {
      for (
        var r = t, o = !1;
        r != null &&
        !r.matches(n) &&
        r !== document.body &&
        ((o = r.matches(e) && !r.matches(l)), !o);
      )
        r = r.parentElement;
      return o;
    }
    function u(t, n) {
      for (
        var r = t, o = !1;
        r != null &&
        r !== n &&
        r !== document.body &&
        ((o = r.matches(e) && !r.matches(l)), !o);
      )
        r = r.parentElement;
      return o;
    }
    function c(t) {
      return t.matches(e);
    }
    ((i.hasInteractiveAncestorUpToSelector = s),
      (i.hasInteractiveAncestorUpToParent = u),
      (i.isInteractive = c));
  },
  66,
);
