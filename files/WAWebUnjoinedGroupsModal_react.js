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
      var t,
        n = e.active,
        a = e.onClick,
        i = e.shouldHighlight,
        l = e.type,
        u = e.unjoinedGroup,
        d = u.groupType,
        m = u.id,
        p = u.subject,
        _ = r("useWAWebActiveSelection")(n, u.id.toString()),
        f = _[0],
        g = _[1],
        h = (t = r("useWAWebEventTargetValue"))(
          u,
          ["change:membershipApprovalMode"],
          function () {
            return u.membershipApprovalMode;
          },
        ),
        y = t(u, ["change:membershipApprovalRequest"], function () {
          return u.membershipApprovalRequest;
        }),
        C = t(u, ["change:hiddenSubgroup"], function () {
          return u.hiddenSubgroup === !0;
        }),
        b = t(u, ["change:size"], function () {
          var e;
          return (e = u.size) != null ? e : 0;
        }),
        v = b > 0,
        S = function (t) {
          (t.preventDefault(), t.stopPropagation(), a(u, l));
        },
        R = { enter: S, space: S },
        L =
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
              }),
        E = "no-border",
        k = d === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        I = c.jsx("span", {
          className: "xhslqc4 xk50ysn",
          children: s._(/*BTDS*/ "Recently added"),
        }),
        T = s._(/*BTDS*/ "Announcement group"),
        D = "\u2022",
        x = s._(/*BTDS*/ "Request sent"),
        $ = s._(/*BTDS*/ "Request to join"),
        P = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
          s._plural(b, "number"),
        ]),
        N = s._(/*BTDS*/ "Invite required"),
        M = null;
      return (
        i && (M = I),
        k
          ? (M = i ? c.jsxs("div", { children: [I, " ", D, " ", T] }) : T)
          : C
            ? (M = i ? c.jsxs("div", { children: [I, " ", D, " ", N] }) : N)
            : y
              ? (M = i ? c.jsxs("div", { children: [I, " ", D, " ", x] }) : x)
              : h
                ? (M = i ? c.jsxs("div", { children: [I, " ", D, " ", $] }) : $)
                : v &&
                  (M = i
                    ? c.jsxs("div", { children: [I, " ", D, " ", P] })
                    : P),
        c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: f,
          handlers: R,
          role: "button",
          children: c.jsx(r("WAWebCellFrame.react"), {
            active: g,
            theme: E,
            primary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: p,
              ellipsify: !0,
            }),
            secondary: M,
            image: L,
            onClick: S,
          }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
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
