__d(
  "WAWebOrgAdminOrganizationPhoto",
  [
    "Promise",
    "WALogger",
    "WAWebImageUtils",
    "WAWebMediaLoad",
    "WAWebNonEmptyString",
    "WAWebProfileCropConstants",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t;
      return (t = o("WAWebNonEmptyString").asMaybeNonEmptyString(
        e == null ? void 0 : e.iconLargeURI,
      )) != null
        ? t
        : o("WAWebNonEmptyString").asMaybeNonEmptyString(
            e == null ? void 0 : e.iconURI,
          );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a,
              i = yield o("WAWebMediaLoad").image(t),
              l = i.fullHeight,
              u = i.fullWidth,
              c = Math.min(l, u),
              d = Math.min(
                Math.max(
                  c,
                  (a = o("WAWebProfileCropConstants")).PROF_PIC_MIN_SIDE,
                ),
                a.PROF_PIC_MAX_SIDE,
              ),
              m = {
                sHeight: c,
                sWidth: c,
                sX: (u - c) / 2,
                sY: (l - c) / 2,
                src: t,
              },
              p = yield (s || (s = n("Promise"))).all([
                o("WAWebImageUtils").crop(
                  babelHelpers.extends({}, m, { dHeight: d, dWidth: d }),
                ),
                o("WAWebImageUtils").crop(
                  babelHelpers.extends({}, m, {
                    dHeight: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
                    dWidth: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
                  }),
                ),
              ]),
              _ = p[0],
              f = p[1];
            return {
              full: o("WAWebNonEmptyString").asNonEmptyString(_.images.dataUrl),
              thumb: o("WAWebNonEmptyString").asNonEmptyString(
                f.images.dataUrl,
              ),
            };
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] organization photo could not be loaded",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-admin-organization-photo-load-failed"),
              null
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.getOrgAdminOrganizationPhotoURL = u), (l.loadOrgAdminPhotoImages = c));
  },
  98,
);
