__d(
  "WAWebCommunityTransferOwnershipFlow.react",
  [
    "$InternalEnum",
    "WAWebCommunityTransferOwnershipConfirmationDrawer.react",
    "WAWebCommunityTransferOwnershipSelectionDrawer.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(24),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.contactSelected,
        p = l.parentGroupChat,
        _ = s === void 0 ? null : s,
        f;
      n[3] !== a.onEnd
        ? ((f = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: a.onEnd,
          }),
          (n[3] = a.onEnd),
          (n[4] = f))
        : (f = n[4]);
      var g = o("useWAWebFlow").useFlow(
          _ != null ? d.CONFIRMATION_DRAWER : m,
          f,
        ),
        h = g[0],
        y = g[1],
        C = c(_),
        b = C[0],
        v = C[1];
      if (y.step == null) return null;
      var S;
      e: switch (y.step) {
        case d.CONTACT_SELECTION_DRAWER: {
          var R;
          n[5] !== y
            ? ((R = function (t) {
                (v(t), y.push(d.CONFIRMATION_DRAWER));
              }),
              (n[5] = y),
              (n[6] = R))
            : (R = n[6]);
          var L = R,
            E;
          n[7] !== y
            ? ((E = function () {
                return y.pop();
              }),
              (n[7] = y),
              (n[8] = E))
            : (E = n[8]);
          var k;
          (n[9] !== L || n[10] !== p || n[11] !== E
            ? ((k = u.jsx(
                r("WAWebCommunityTransferOwnershipSelectionDrawer.react"),
                { chat: p, onBack: E, onTransferOwnershipSelection: L },
              )),
              (n[9] = L),
              (n[10] = p),
              (n[11] = E),
              (n[12] = k))
            : (k = n[12]),
            (S = k));
          break e;
        }
        case d.CONFIRMATION_DRAWER: {
          if (b == null) break e;
          var I;
          n[13] !== y
            ? ((I = function () {
                return y.pop();
              }),
              (n[13] = y),
              (n[14] = I))
            : (I = n[14]);
          var T;
          (n[15] !== p || n[16] !== b || n[17] !== I
            ? ((T = u.jsx(
                r("WAWebCommunityTransferOwnershipConfirmationDrawer.react"),
                { chat: p, onBack: I, newOwner: b },
              )),
              (n[15] = p),
              (n[16] = b),
              (n[17] = I),
              (n[18] = T))
            : (T = n[18]),
            (S = T));
        }
      }
      var D;
      return (
        n[19] !== h || n[20] !== S || n[21] !== y || n[22] !== i
          ? ((D = u.jsx(h, { ref: i, flow: y, children: S })),
            (n[19] = h),
            (n[20] = S),
            (n[21] = y),
            (n[22] = i),
            (n[23] = D))
          : (D = n[23]),
        D
      );
    }
    l.default = p;
  },
  98,
);
