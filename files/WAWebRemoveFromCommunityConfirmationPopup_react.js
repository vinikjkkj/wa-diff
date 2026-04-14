__d(
  "WAWebRemoveFromCommunityConfirmationPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebRemoveFromCommunityAction",
    "react",
    "useWAWebContactValues",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = r("useWAWebFocusOnMount")(),
        a = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getFormattedName,
        ]),
        i = a[0],
        l = a[1],
        c = o("useWAWebModelValues").useModelValues(e.parentGroupChat, [
          "id",
          "formattedTitle",
        ]),
        d = s._(/*BTDS*/ "Remove {contact-name} from community and groups?", [
          s._param(
            "contact-name",
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: l,
            }),
          ),
        ]),
        m = s._(/*BTDS*/ "Remove {contact-name} from community and groups?", [
          s._param("contact-name", l),
        ]),
        p = s._(
          /*BTDS*/ 'By removing {contact-name} from "{community-name}" they will exit and lose access to all groups that they belong to in this community, including those they created. {=m7}',
          [
            s._param(
              "contact-name",
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: l,
              }),
            ),
            s._param(
              "community-name",
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: c.formattedTitle,
              }),
            ),
            s._implicitParam(
              "=m7",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getRemoveFromCommunityFaqUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ),
          ],
        ),
        _ = function () {
          (r("WAWebRemoveFromCommunityAction")(c, t),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        ref: n,
        title: d,
        onOK: _,
        onCancel: o("WAWebModalManager").closeModalManager,
        okText: s._(/*BTDS*/ "Remove"),
        okButtonType: "solid-warning",
        ariaLabel: m,
        children: p,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
