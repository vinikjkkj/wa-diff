__d(
  "BaseMenuFocusGroup",
  [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "FocusGroup.react",
    "focusScopeQueries",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["useKeyCommands"],
      u,
      c = u || (u = o("react")),
      d = o("FocusGroup.react").createFocusGroup(
        o("focusScopeQueries").tabbableScopeQuery,
      ),
      m = d[0],
      p = d[1];
    function _(t) {
      var n = t.useKeyCommands,
        o = n === void 0 ? !0 : n,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (!o) return c.jsx(m, babelHelpers.extends({}, a));
      var i = [
        {
          command: { key: r("CometKeys").UP },
          description: s._(/*BTDS*/ ""),
          handler: function () {},
        },
        {
          command: { key: r("CometKeys").DOWN },
          description: s._(/*BTDS*/ ""),
          handler: function () {},
        },
      ];
      return c.jsx(r("CometComponentWithKeyCommands.react"), {
        commandConfigs: i,
        children: c.jsx(m, babelHelpers.extends({}, a)),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = { FocusGroup: _, FocusItem: p };
    l.default = f;
  },
  226,
);
