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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.color,
        a = e.newsletterAdminProfile,
        i;
      if (t[0] !== n || t[1] !== a) {
        i = s.jsx(
          o("WAWebDefaultContactRefreshedIcon.react")
            .DefaultContactRefreshedIcon,
          { iconXstyle: u.contactIcon, "aria-hidden": !0 },
        );
        var l;
        t[3] !== a
          ? ((l = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(
              a,
            )),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]);
        var c = l;
        ((c.firstInitial != null || c.secondInitial != null) &&
          (i = s.jsx(
            o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
            {
              initialsData: c,
              theme: o("WAWebInitialsProfilePicture.react").ThemeType
                .GroupChatProfilePicture,
              backgroundColorId: n,
            },
          )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i));
      } else i = t[2];
      var d;
      t[5] !== a.pictureDirectPath
        ? ((d = o("WAWebNewsletterModelUtils").formatProfilePictureURL(
            a.pictureDirectPath,
          )),
          (t[5] = a.pictureDirectPath),
          (t[6] = d))
        : (d = t[6]);
      var m = d,
        p;
      t[7] !== n || t[8] !== a
        ? ((p = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              s.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
                color: n,
                newsletterAdminProfile: a,
                onClose: o("WAWebDrawerManager").closeDrawerRight,
              }),
            );
          }),
          (t[7] = n),
          (t[8] = a),
          (t[9] = p))
        : (p = t[9]);
      var _;
      t[10] !== i || t[11] !== m
        ? ((_ =
            m == null
              ? i
              : s.jsx(r("WAWebImg.react"), {
                  src: m,
                  hasPrivacyChecks: !0,
                  crossOrigin: !1,
                  className:
                    "x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23",
                  draggable: !1,
                  renderError: function () {
                    return i;
                  },
                })),
          (t[10] = i),
          (t[11] = m),
          (t[12] = _))
        : (_ = t[12]);
      var f;
      return (
        t[13] !== p || t[14] !== _
          ? ((f = s.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: u.button,
              onClick: p,
              children: _,
            })),
            (t[13] = p),
            (t[14] = _),
            (t[15] = f))
          : (f = t[15]),
        f
      );
    }
    l.default = c;
  },
  98,
);
