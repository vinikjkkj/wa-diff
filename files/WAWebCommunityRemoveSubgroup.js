__d(
  "WAWebCommunityRemoveSubgroup",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebEmojiText.react",
    "WAWebUnlinkSubgroupsAction",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.handleRemove,
        a = e.removeDisclaimer,
        i = e.removeParticipantOption,
        l = i === void 0 ? !1 : i,
        d = c(!1),
        m = d[0],
        p = d[1],
        _;
      t[0] !== m || t[1] !== l
        ? ((_ = l
            ? {
                checked: m,
                onChange: p,
                testid: "remove-orphan-members",
                title: s._(/*BTDS*/ "Remove group members"),
              }
            : void 0),
          (t[0] = m),
          (t[1] = l),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Remove")), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== n || t[5] !== m
        ? ((g = function () {
            n(m);
          }),
          (t[4] = n),
          (t[5] = m),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Remove group from community?")), (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== a || t[9] !== _ || t[10] !== g
          ? ((y = u.jsx(r("WDSConfirmDialog.react"), {
              conditional: _,
              confirmLabel: f,
              description: a,
              destructive: !0,
              onConfirm: g,
              onDismiss: o("WDSDialogBridge").closeWDSDialog,
              open: !0,
              title: h,
            })),
            (t[8] = a),
            (t[9] = _),
            (t[10] = g),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    function m(e) {
      var t,
        a = e.iAmCommunityAdmin,
        i = a === void 0 ? !0 : a,
        l = e.parentId,
        c = e.removedSubgroupTitle,
        m = e.removedSubgroupWid,
        f = e.setLoading,
        g =
          (t = o("WAWebChatCollection").ChatCollection.get(l)) == null
            ? void 0
            : t.formattedTitle,
        h,
        y = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (e === void 0 && (e = !1),
              o("WDSDialogBridge").closeWDSDialog(),
              f(!0),
              yield r("WAWebUnlinkSubgroupsAction")(l, [m], e),
              f(!1));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      if (i) {
        ((h = s._(
          /*BTDS*/ 'You can remove the "{group_title}" group from the community. You can also remove the group and its members who aren\'t part of other groups.',
          [
            s._param(
              "group_title",
              u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }),
            ),
          ],
        )),
          o("WDSDialogBridge").openWDSDialog(
            u.jsx(d, {
              removeDisclaimer: h,
              handleRemove: y,
              removeParticipantOption: !0,
            }),
          ));
        return;
      }
      ((h = g != null ? p(c, g) : _(c)),
        o("WDSDialogBridge").openWDSDialog(
          u.jsx(d, { removeDisclaimer: h, handleRemove: y }),
        ));
    }
    function p(e, t) {
      return s._(
        /*BTDS*/ '"{group_title}" will no longer be part of this community "{community_title}." Anyone in this group will still be able to find it from their chats to send messages and make calls.',
        [
          s._param(
            "group_title",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e }),
          ),
          s._param(
            "community_title",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t }),
          ),
        ],
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return s._(
        /*BTDS*/ '"{group_title}" will no longer be part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.',
        [
          s._param(
            "group_title",
            u.jsx(o("WAWebEmojiText.react").EmojiText, { text: e }),
          ),
        ],
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.handleRemoveSubgroup = m));
  },
  226,
);
