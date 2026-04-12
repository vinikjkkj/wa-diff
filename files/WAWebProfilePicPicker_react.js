__d(
  "WAWebProfilePicPicker.react",
  [
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseRaceAbort",
    "WATimeUtils",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebFocusTracer",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebPhotoPickerConstants",
    "WAWebPhotoPickerLoadable.react",
    "WAWebProfilePicThumbAction",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useRef,
      m = c.useState;
    function p(t) {
      var n,
        a = t.profilePicThumb,
        i = t.size,
        l = t.tabIndex,
        s = !a.canSet() && !a.canDelete(),
        c = m(!1),
        p = c[0],
        _ = c[1],
        f = r("useWAWebUnmountSignal")(),
        g = d(null),
        h = (n = t.editImageButtonRef) != null ? n : g,
        y = function () {
          h.current && r("WAWebFocusTracer").focus(h.current);
        },
        C = function (a, i) {
          var n = t.profilePicThumb;
          _(!0);
          var l = n.imgFull != null && n.imgFull !== "",
            s,
            u = !1,
            c;
          (a != null && i != null
            ? ((s = o("WAWebProfilePicThumbAction").setProfilePic(n, a, i, y)),
              (c = l
                ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                    .MODIFY
                : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                    .ADD))
            : ((u = !0),
              (s = o("WAWebProfilePicThumbAction").deleteProfilePic(n, y)),
              (c = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                .REMOVE)),
            o(
              "WAWebBusinessProfileSMBUserJourneyLogger",
            ).BusinessProfileUserJourneyLogger.saveProfilePhoto(c),
            r("WAPromiseRaceAbort")(s, f)
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").ActionError,
                  function (t) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "ProfileDrawer: failed to set/delete profile image",
                        ])),
                    );
                  },
                ),
              )
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .finally(function () {
                (_(!1),
                  u &&
                    o("WAWebUserPrefsGeneral").setLastProfilePicThumbUpdate(
                      o("WATimeUtils").unixTime(),
                    ));
              }));
        };
      return u.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
        tabIndex: l,
        type: o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE,
        id: a.id,
        attachToChat: !1,
        pending: p,
        startImage: a.imgFull,
        readOnly: s,
        onImageSet: C,
        size: i,
        editImageButtonRef: h,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
