__d(
  "WAWebNewsletterAdminProfilePicture.react",
  [
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDrawerManager",
    "WAWebImg.react",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebNewsletterAdminProfileDetailsDrawer.react",
    "WAWebNewsletterModelUtils",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        contactIcon: {
          width: "xh8yej3",
          height: "x5yr21d",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1od0jb8",
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
        button: { width: "x14qfxbe", height: "xc9qbxq", $$css: !0 },
      };
    function c(e) {
      var t = e.color,
        n = e.newsletterAdminProfile,
        a = s.jsx(
          o("WAWebDefaultContactRefreshedIcon.react")
            .DefaultContactRefreshedIcon,
          { iconXstyle: u.contactIcon, "aria-hidden": !0 },
        ),
        i = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(n);
      (i.firstInitial != null || i.secondInitial != null) &&
        (a = s.jsx(
          o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
          {
            initialsData: i,
            theme: o("WAWebInitialsProfilePicture.react").ThemeType
              .GroupChatProfilePicture,
            backgroundColorId: t,
          },
        ));
      var l = o("WAWebNewsletterModelUtils").formatProfilePictureURL(
        n.pictureDirectPath,
      );
      return s.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: u.button,
        onClick: function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            s.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
              color: t,
              newsletterAdminProfile: n,
              onClose: o("WAWebDrawerManager").closeDrawerRight,
            }),
          );
        },
        children:
          l == null
            ? a
            : s.jsx(r("WAWebImg.react"), {
                src: l,
                hasPrivacyChecks: !0,
                crossOrigin: !1,
                className:
                  "x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23",
                draggable: !1,
                renderError: function () {
                  return a;
                },
              }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
