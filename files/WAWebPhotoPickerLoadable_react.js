__d(
  "WAWebPhotoPickerLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingPhotoPicker.react",
    "WAWebPhotoPickerConstants",
    "asyncToGeneratorRuntime",
    "react",
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
      switch (e.type) {
        case o("WAWebPhotoPickerConstants").PhotoPickerType.NEWSLETTER:
        case o("WAWebPhotoPickerConstants").PhotoPickerType.GROUP:
        case o("WAWebPhotoPickerConstants").PhotoPickerType
          .DEFAULT_ANNOUNCEMENT_GROUP:
        case o("WAWebPhotoPickerConstants").PhotoPickerType.GENERAL_GROUP:
          return s.jsx(d, babelHelpers.extends({}, e, { testid: void 0 }));
        case o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY:
          return s.jsx(m, babelHelpers.extends({}, e, { testid: void 0 }));
        case o("WAWebPhotoPickerConstants").PhotoPickerType.PROFILE:
          return s.jsx(c, babelHelpers.extends({}, e, { testid: void 0 }));
        case o("WAWebPhotoPickerConstants").PhotoPickerType.COVER_PHOTO:
          return s.jsx(p, babelHelpers.extends({}, e, { testid: void 0 }));
      }
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.requireBundle = u),
      (l.PhotoPickerLoadable = g));
  },
  98,
);
