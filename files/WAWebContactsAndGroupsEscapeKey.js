__d(
  "WAWebContactsAndGroupsEscapeKey",
  ["WAWebContactsAndGroupsTextFields", "WAWebUim"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        e === o("WAWebUim").DismissReason.UIM_INTERACTION &&
        (t == null ? void 0 : t.type) === "keydown" &&
        !s(t.target) &&
        !o("WAWebContactsAndGroupsTextFields").isTextField(t.target)
      );
    }
    function s(e) {
      return (
        e instanceof Element &&
        e.closest('[role="dialog"], [aria-modal="true"], [role="menu"]') != null
      );
    }
    l.isEscapeForPage = e;
  },
  98,
);
