__d(
  "WAWebPhotoPickerLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingPhotoPicker.react",
    "WAWebPhotoPickerConstants",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebPhotoPicker.react")
            .__setRef("WAWebPhotoPickerLoadable.react")
            .load();
          return e;
        }),
        "PhotoPicker",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
            svgName: "default-user",
            error: !!t.error,
            retry: t.retry,
          });
        },
      }),
      d = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
            svgName: "default-group",
            error: !!t.error,
            retry: t.retry,
          });
        },
      }),
      m = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
            svgName: "default-group",
            error: !!t.error,
            retry: t.retry,
          });
        },
      }),
      p = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingPhotoPicker.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      }),
      _ = "cover-photo-picker",
      f = "profile-pic-picker";
    function g(e) {
      var t = o("react-compiler-runtime").c(8);
      switch (e.type) {
        case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
        case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
        case o("WAWebPhotoPickerConstants").PhotoPickerType
          .DEFAULT_ANNOUNCEMENT_GROUP:
        case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP: {
          var n;
          return (
            t[0] !== e
              ? ((n = s.jsx(
                  d,
                  babelHelpers.extends({}, e, { testid: void 0 }),
                )),
                (t[0] = e),
                (t[1] = n))
              : (n = t[1]),
            n
          );
        }
        case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY: {
          var r;
          return (
            t[2] !== e
              ? ((r = s.jsx(
                  m,
                  babelHelpers.extends({}, e, { testid: void 0 }),
                )),
                (t[2] = e),
                (t[3] = r))
              : (r = t[3]),
            r
          );
        }
        case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE: {
          var a;
          return (
            t[4] !== e
              ? ((a = s.jsx(
                  c,
                  babelHelpers.extends({}, e, { testid: void 0 }),
                )),
                (t[4] = e),
                (t[5] = a))
              : (a = t[5]),
            a
          );
        }
        case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO: {
          var i;
          return (
            t[6] !== e
              ? ((i = s.jsx(
                  p,
                  babelHelpers.extends({}, e, { testid: void 0 }),
                )),
                (t[6] = e),
                (t[7] = i))
              : (i = t[7]),
            i
          );
        }
      }
    }
    ((l.requireBundle = u), (l.PhotoPickerLoadable = g));
  },
  98,
);
