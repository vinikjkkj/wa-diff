__d(
  "WAWebOutContactInviteButton.react",
  [
    "fbt",
    "WALogger",
    "WAWebOutContactConsts",
    "WAWebOutContactInviteAction",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useCallback;
    function m(t) {
      var n = t.entryPoint,
        a =
          n === void 0
            ? o("WAWebOutContactConsts").WAWebOutContactInviteEntryPoint
                .CONTACT_PICKER_LIST
            : n,
        i = t.phoneNumber,
        l = d(
          function () {
            o("WAWebOutContactInviteAction")
              .sendInvite(i, a)
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[out-contact-invite] sendInvite failed unexpectedly: ",
                      "",
                    ])),
                  t,
                );
              });
          },
          [a, i],
        );
      return c.jsx(r("WDSButton.react"), {
        testid: void 0,
        size: "small",
        variant: "borderless",
        onPress: l,
        label: s._(/*BTDS*/ "Invite"),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
