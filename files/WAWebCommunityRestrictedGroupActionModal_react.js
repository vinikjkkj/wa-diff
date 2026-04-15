__d(
  "WAWebCommunityRestrictedGroupActionModal.react",
  [
    "fbt",
    "WAWebCommunityRemoveSubgroup",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWarningIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebIAmCommunityAdmin",
    "useWAWebModelValues",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        icon: { color: "x17k9de1", $$css: !0 },
        marginTop20: { marginTop: "x1nmyh1g", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.chat;
      r("vulture")("ZbQiIcEXg_r5a6426FZml_IxvMI=");
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["groupMetadata", "id", "formattedTitle"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l = i.formattedTitle,
        m = i.groupMetadata,
        p = i.id,
        _ = m == null ? void 0 : m.parentGroup,
        f;
      if (_ != null) {
        var g;
        (t[1] !== _
          ? ((g = r("WAWebGroupMetadataCollection").get(_.toString())),
            (t[1] = _),
            (t[2] = g))
          : (g = t[2]),
          (f = g));
      }
      var h = r("useWAWebIAmCommunityAdmin")(f),
        y;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["bulk_add", "bulk_remove"]), (t[3] = y))
        : (y = t[3]);
      var C;
      t[4] !== (m == null ? void 0 : m.participants)
        ? ((C = function () {
            return m == null ? void 0 : m.participants.iAmAdmin();
          }),
          (t[4] = m == null ? void 0 : m.participants),
          (t[5] = C))
        : (C = t[5]);
      var b = !!r("useWAWebEventTargetValue")(
          m == null ? void 0 : m.participants,
          y,
          C,
        ),
        v = c(!1),
        S = v[0],
        R = v[1];
      if (_ == null || f == null || (!h && !b)) return null;
      var L;
      t[6] !== S || t[7] !== h || t[8] !== _ || t[9] !== l || t[10] !== p
        ? ((L = function () {
            S ||
              o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
                parentId: _,
                removedSubgroupWid: p,
                removedSubgroupTitle: l,
                setLoading: R,
                iAmCommunityAdmin: h,
              });
          }),
          (t[6] = S),
          (t[7] = h),
          (t[8] = _),
          (t[9] = l),
          (t[10] = p),
          (t[11] = L))
        : (L = t[11]);
      var E = L,
        k;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: u.jsx(o("WAWebWarningIcon.react").WarningIcon, {
              width: 48,
              height: 48,
              iconXstyle: d.icon,
            }),
          })),
          (t[12] = k))
        : (k = t[12]);
      var I = k,
        T;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
              xstyle: d.marginTop20,
              children: s._(/*BTDS*/ "This action is not available"),
            }),
          })),
          (t[13] = T))
        : (T = t[13]);
      var D = T,
        x;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            margin: 16,
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: s._(
                /*BTDS*/ "This group is a part of the community that's no longer available. You can remove this group from the community to gain full access.",
              ),
            }),
          })),
          (t[14] = x))
        : (x = t[14]);
      var $ = x,
        P;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Remove group")), (t[15] = P))
        : (P = t[15]);
      var N = P,
        M;
      return (
        t[16] !== S || t[17] !== E
          ? ((M = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: E,
              okText: N,
              onCancel: o("WAWebModalManager").closeModalManager,
              okDisabled: S,
              children: [I, D, $],
            })),
            (t[16] = S),
            (t[17] = E),
            (t[18] = M))
          : (M = t[18]),
        M
      );
    }
    l.default = m;
  },
  226,
);
