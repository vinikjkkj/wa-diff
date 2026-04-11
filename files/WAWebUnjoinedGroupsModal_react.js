__d(
  "WAWebUnjoinedGroupsModal.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebEmptyState.react",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10NAccentFold",
    "WAWebModalsListModal.react",
    "WAWebSingleSelection",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebActiveSelection",
    "useWAWebDebouncedSearch",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = o("WAWebModalsListModal.react").ListModalFactory();
    function p(e) {
      var t = o("react-compiler-runtime").c(53),
        n = e.active,
        a = e.onClick,
        i = e.shouldHighlight,
        l = e.type,
        u = e.unjoinedGroup,
        d = u.groupType,
        m = u.id,
        p = u.subject,
        _;
      t[0] !== u.id
        ? ((_ = u.id.toString()), (t[0] = u.id), (t[1] = _))
        : (_ = t[1]);
      var f = r("useWAWebActiveSelection")(n, _),
        g = f[0],
        h = f[1],
        y;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["change:membershipApprovalMode"]), (t[2] = y))
        : (y = t[2]);
      var C;
      t[3] !== u.membershipApprovalMode
        ? ((C = function () {
            return u.membershipApprovalMode;
          }),
          (t[3] = u.membershipApprovalMode),
          (t[4] = C))
        : (C = t[4]);
      var b = r("useWAWebEventTargetValue")(u, y, C),
        v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["change:membershipApprovalRequest"]), (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] !== u.membershipApprovalRequest
        ? ((S = function () {
            return u.membershipApprovalRequest;
          }),
          (t[6] = u.membershipApprovalRequest),
          (t[7] = S))
        : (S = t[7]);
      var R = r("useWAWebEventTargetValue")(u, v, S),
        L;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = ["change:hiddenSubgroup"]), (t[8] = L))
        : (L = t[8]);
      var E;
      t[9] !== u.hiddenSubgroup
        ? ((E = function () {
            return u.hiddenSubgroup === !0;
          }),
          (t[9] = u.hiddenSubgroup),
          (t[10] = E))
        : (E = t[10]);
      var k = r("useWAWebEventTargetValue")(u, L, E),
        I;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = ["change:size"]), (t[11] = I))
        : (I = t[11]);
      var T;
      t[12] !== u.size
        ? ((T = function () {
            var e;
            return (e = u.size) != null ? e : 0;
          }),
          (t[12] = u.size),
          (t[13] = T))
        : (T = t[13]);
      var D = r("useWAWebEventTargetValue")(u, I, T),
        x = D > 0,
        $;
      t[14] !== a || t[15] !== l || t[16] !== u
        ? (($ = function (t) {
            (t.preventDefault(), t.stopPropagation(), a(u, l));
          }),
          (t[14] = a),
          (t[15] = l),
          (t[16] = u),
          (t[17] = $))
        : ($ = t[17]);
      var P = $,
        N;
      t[18] !== P
        ? ((N = { enter: P, space: P }), (t[18] = P), (t[19] = N))
        : (N = t[19]);
      var M = N,
        w;
      t[20] !== d || t[21] !== m
        ? ((w =
            d === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? c.jsx(o("WAWebDetailImage.react").DetailImage, {
                  size: 49,
                  id: m,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                })
              : c.jsx(o("WAWebDetailImage.react").DetailImage, {
                  size: 49,
                  id: m,
                  hiddenSubgroupIcon: "chat-list",
                })),
          (t[20] = d),
          (t[21] = m),
          (t[22] = w))
        : (w = t[22]);
      var A = w,
        F = d === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        O;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = c.jsx("span", {
            className: "xhslqc4 xk50ysn",
            children: s._(/*BTDS*/ "Recently added"),
          })),
          (t[23] = O))
        : (O = t[23]);
      var B = O,
        W;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Announcement group")), (t[24] = W))
        : (W = t[24]);
      var q = W,
        U;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "Request sent")), (t[25] = U))
        : (U = t[25]);
      var V = U,
        H;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s._(/*BTDS*/ "Request to join")), (t[26] = H))
        : (H = t[26]);
      var G = H,
        z;
      t[27] !== D
        ? ((z = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
            s._plural(D, "number"),
          ])),
          (t[27] = D),
          (t[28] = z))
        : (z = t[28]);
      var j = z,
        K;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Invite required")), (t[29] = K))
        : (K = t[29]);
      var Q = K,
        X = null;
      if ((i && (X = B), F)) {
        var Y;
        (t[30] !== i
          ? ((Y = i
              ? c.jsxs("div", { children: [B, " ", "\u2022", " ", q] })
              : q),
            (t[30] = i),
            (t[31] = Y))
          : (Y = t[31]),
          (X = Y));
      } else if (k) {
        var J;
        (t[32] !== i
          ? ((J = i
              ? c.jsxs("div", { children: [B, " ", "\u2022", " ", Q] })
              : Q),
            (t[32] = i),
            (t[33] = J))
          : (J = t[33]),
          (X = J));
      } else if (R) {
        var Z;
        (t[34] !== i
          ? ((Z = i
              ? c.jsxs("div", { children: [B, " ", "\u2022", " ", V] })
              : V),
            (t[34] = i),
            (t[35] = Z))
          : (Z = t[35]),
          (X = Z));
      } else if (b) {
        var ee;
        (t[36] !== i
          ? ((ee = i
              ? c.jsxs("div", { children: [B, " ", "\u2022", " ", G] })
              : G),
            (t[36] = i),
            (t[37] = ee))
          : (ee = t[37]),
          (X = ee));
      } else if (x) {
        var te;
        (t[38] !== j || t[39] !== i
          ? ((te = i
              ? c.jsxs("div", { children: [B, " ", "\u2022", " ", j] })
              : j),
            (t[38] = j),
            (t[39] = i),
            (t[40] = te))
          : (te = t[40]),
          (X = te));
      }
      var ne;
      t[41] !== p
        ? ((ne = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: p,
            ellipsify: !0,
          })),
          (t[41] = p),
          (t[42] = ne))
        : (ne = t[42]);
      var re;
      t[43] !== P || t[44] !== A || t[45] !== h || t[46] !== X || t[47] !== ne
        ? ((re = c.jsx(r("WAWebCellFrame.react"), {
            active: h,
            theme: "no-border",
            primary: ne,
            secondary: X,
            image: A,
            onClick: P,
          })),
          (t[43] = P),
          (t[44] = A),
          (t[45] = h),
          (t[46] = X),
          (t[47] = ne),
          (t[48] = re))
        : (re = t[48]);
      var oe;
      return (
        t[49] !== M || t[50] !== g || t[51] !== re
          ? ((oe = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: g,
              handlers: M,
              role: "button",
              children: re,
            })),
            (t[49] = M),
            (t[50] = g),
            (t[51] = re),
            (t[52] = oe))
          : (oe = t[52]),
        oe
      );
    }
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.unjoinedGroups,
        l = a.onCancel,
        u = a.onClickGroup,
        _ = a.title,
        f = _ === void 0 ? s._(/*BTDS*/ "Groups") : _,
        g = a.type,
        h = a.highlightedSubgroups,
        y = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        C = r("useWAWebDebouncedSearch")(),
        b = C[0],
        v = C[1],
        S = c.jsx(o("WAWebEmptyState.react").SearchGroups, {}),
        R = d(
          function () {
            var e = o("WAWebL10NAccentFold").accentFold(b),
              t = i.filter(function (t) {
                var n = o("WAWebL10NAccentFold").accentFold(t.subject);
                return !e || n.includes(e);
              }),
              n = t.map(function (e) {
                return { unjoinedGroup: e, itemKey: e.id.toString() };
              });
            return (y.current.init(n), n);
          },
          [b, i],
        ),
        L = function (t, n) {
          (t == null || t.preventDefault(),
            t == null || t.stopPropagation(),
            u(n.unjoinedGroup, a.type));
        };
      return c.jsx(m, {
        title: f,
        data: R,
        renderItem: function (t) {
          var e = t.unjoinedGroup;
          return c.jsx(p, {
            unjoinedGroup: e,
            onClick: u,
            active: y.current,
            type: g,
            shouldHighlight: h.some(function (t) {
              return e.id.equals(t);
            }),
          });
        },
        emptyState: S,
        onSelect: L,
        onCancel: l,
        ref: n,
        onSearch: v,
        selection: y.current,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
