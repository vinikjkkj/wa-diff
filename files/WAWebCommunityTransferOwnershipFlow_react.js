__d(
  "WAWebCommunityTransferOwnershipFlow.react",
  [
    "$InternalEnum",
    "WAWebCommunityTransferOwnershipConfirmationDrawer.react",
    "WAWebCommunityTransferOwnershipSelectionDrawer.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "CONTACT_SELECTION_DRAWER",
        "CONFIRMATION_DRAWER",
      ]),
      m = d.CONTACT_SELECTION_DRAWER;
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.contactSelected,
        l = i === void 0 ? null : i,
        s = a.parentGroupChat,
        p = o("useWAWebFlow").useFlow(l != null ? d.CONFIRMATION_DRAWER : m, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: a.onEnd,
        }),
        _ = p[0],
        f = p[1],
        g = c(l),
        h = g[0],
        y = g[1];
      if (f.step == null) return null;
      var C;
      switch (f.step) {
        case d.CONTACT_SELECTION_DRAWER: {
          var b = function (t) {
            (y(t), f.push(d.CONFIRMATION_DRAWER));
          };
          C = u.jsx(r("WAWebCommunityTransferOwnershipSelectionDrawer.react"), {
            chat: s,
            onBack: function () {
              return f.pop();
            },
            onTransferOwnershipSelection: b,
          });
          break;
        }
        case d.CONFIRMATION_DRAWER: {
          if (h == null) break;
          C = u.jsx(
            r("WAWebCommunityTransferOwnershipConfirmationDrawer.react"),
            {
              chat: s,
              onBack: function () {
                return f.pop();
              },
              newOwner: h,
            },
          );
          break;
        }
      }
      return u.jsx(_, { ref: n, flow: f, children: C });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
