__d(
  "WAWebCommunityExistingGroupConfirmationPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.communityName,
        n = e.groupCount,
        a = e.onContinue,
        i =
          t != null
            ? s._(
                /*BTDS*/ '_j{"*":"Anyone in the community \\"{community-name}\\" will be able to join these groups.","_1":"Anyone in the community \\"{community-name}\\" will be able to join this group."}',
                [
                  s._plural(n),
                  s._param(
                    "community-name",
                    u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ '_j{"*":"Anyone in a community will be able to join these groups.","_1":"Anyone in a community will be able to join this group."}',
                [s._plural(n)],
              ),
        l = function () {
          (a(), o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: l,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: r("WAWebFbtCommon")("Continue"),
        children: i,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
