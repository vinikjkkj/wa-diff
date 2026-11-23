__d(
  "WAWebCommunityRemoveSubgroup",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebEmojiText.react",
    "WAWebUnlinkSubgroupsAction",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.handleRemove,
        n = e.removeDisclaimer,
        a = e.removeParticipantOption,
        i = a === void 0 ? !1 : a,
        l = c(!1),
        d = l[0],
        m = l[1];
      return u.jsx(r("WDSConfirmDialog.react"), {
        conditional: i
          ? {
              checked: d,
              onChange: m,
              testid: "remove-orphan-members",
              title: s._(/*BTDS*/ ""),
            }
          : void 0,
        confirmLabel: s._(/*BTDS*/ ""),
        description: n,
        destructive: !0,
        onConfirm: function () {
          t(d);
        },
        onDismiss: o("WDSDialogBridge").closeWDSDialog,
        open: !0,
        title: s._(/*BTDS*/ ""),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t,
        n = e.iAmCommunityAdmin,
        a = n === void 0 ? !0 : n,
        i = e.parentId,
        l = e.removedSubgroupTitle,
        c = e.removedSubgroupWid,
        m = e.setLoading,
        f =
          (t = o("WAWebChatCollection").ChatCollection.get(i)) == null
            ? void 0
            : t.formattedTitle,
        g,
        h = async function (t) {
          (t === void 0 && (t = !1),
            o("WDSDialogBridge").closeWDSDialog(),
            m(!0),
            await r("WAWebUnlinkSubgroupsAction")(i, [c], t),
            m(!1));
        };
      if (a) {
        ((g = s._(/*BTDS*/ "", [
          s._param(
            "group_title",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: l }),
          ),
        ])),
          o("WDSDialogBridge").openWDSDialog(
            u.jsx(d, {
              removeDisclaimer: g,
              handleRemove: h,
              removeParticipantOption: !0,
            }),
          ));
        return;
      }
      ((g = f != null ? p(l, f) : _(l)),
        o("WDSDialogBridge").openWDSDialog(
          u.jsx(d, { removeDisclaimer: g, handleRemove: h }),
        ));
    }
    function p(e, t) {
      return s._(/*BTDS*/ "", [
        s._param(
          "group_title",
          u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e }),
        ),
        s._param(
          "community_title",
          u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t }),
        ),
      ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return s._(/*BTDS*/ "", [
        s._param(
          "group_title",
          u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e }),
        ),
      ]);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.handleRemoveSubgroup = m));
  },
  226,
);
