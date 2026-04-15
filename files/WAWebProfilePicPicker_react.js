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
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useRef,
      m = c.useState;
    function p(e) {
      var t,
        n = o("react-compiler-runtime").c(17),
        a = e.profilePicThumb,
        i = e.size,
        l = e.tabIndex,
        s;
      n[0] !== a
        ? ((s = !a.canSet() && !a.canDelete()), (n[0] = a), (n[1] = s))
        : (s = n[1]);
      var c = s,
        p = m(!1),
        f = p[0],
        g = p[1],
        h = r("useWAWebUnmountSignal")(),
        y = d(null),
        C = (t = e.editImageButtonRef) != null ? t : y,
        b;
      n[2] !== C
        ? ((b = function () {
            C.current && r("WAWebFocusTracer").focus(C.current);
          }),
          (n[2] = C),
          (n[3] = b))
        : (b = n[3]);
      var v = b,
        S;
      n[4] !== v || n[5] !== e.profilePicThumb || n[6] !== h
        ? ((S = function (n, a) {
            var t = e.profilePicThumb;
            g(!0);
            var i = t.imgFull != null && t.imgFull !== "",
              l,
              s = !1,
              u;
            (n != null && a != null
              ? ((l = o("WAWebProfilePicThumbAction").setProfilePic(
                  t,
                  n,
                  a,
                  v,
                )),
                (u = i
                  ? o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                      .MODIFY
                  : o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                      .ADD))
              : ((s = !0),
                (l = o("WAWebProfilePicThumbAction").deleteProfilePic(t, v)),
                (u = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                  .REMOVE)),
              o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.saveProfilePhoto(u),
              r("WAPromiseRaceAbort")(l, h)
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebMiscErrors").ActionError,
                    _,
                  ),
                )
                .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
                .finally(function () {
                  (g(!1),
                    s &&
                      o("WAWebUserPrefsGeneral").setLastProfilePicThumbUpdate(
                        o("WATimeUtils").unixTime(),
                      ));
                }));
          }),
          (n[4] = v),
          (n[5] = e.profilePicThumb),
          (n[6] = h),
          (n[7] = S))
        : (S = n[7]);
      var R = S,
        L;
      return (
        n[8] !== C ||
        n[9] !== R ||
        n[10] !== f ||
        n[11] !== a.id ||
        n[12] !== a.imgFull ||
        n[13] !== c ||
        n[14] !== i ||
        n[15] !== l
          ? ((L = u.jsx(
              o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable,
              {
                tabIndex: l,
                type: o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE,
                id: a.id,
                attachToChat: !1,
                pending: f,
                startImage: a.imgFull,
                readOnly: c,
                onImageSet: R,
                size: i,
                editImageButtonRef: C,
              },
            )),
            (n[8] = C),
            (n[9] = R),
            (n[10] = f),
            (n[11] = a.id),
            (n[12] = a.imgFull),
            (n[13] = c),
            (n[14] = i),
            (n[15] = l),
            (n[16] = L))
          : (L = n[16]),
        L
      );
    }
    function _(t) {
      o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "ProfileDrawer: failed to set/delete profile image",
          ])),
      );
    }
    l.default = p;
  },
  98,
);
