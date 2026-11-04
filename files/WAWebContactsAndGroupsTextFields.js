__d(
  "WAWebContactsAndGroupsTextFields",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set([
      "button",
      "checkbox",
      "color",
      "file",
      "hidden",
      "image",
      "radio",
      "range",
      "reset",
      "submit",
    ]);
    function l(t) {
      return t instanceof HTMLElement
        ? t.isContentEditable || t instanceof HTMLTextAreaElement
          ? !0
          : t instanceof HTMLInputElement && !e.has(t.type)
        : !1;
    }
    i.isTextField = l;
  },
  66,
);
