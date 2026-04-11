__d(
  "WAWebProductCatalogProductPostcodeChangeBanner",
  [
    "fbt",
    "WALogger",
    "WAWebBusinessDirectConnectionCollection",
    "WAWebClickableLink.react",
    "WAWebModalManager",
    "WAWebProductCollectionCatalogPostcodeChangeModal",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useBoolean",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.postcode,
        a = e.catalogWid,
        i = e.postcodeChangeSuccess;
      r("vulture")("rTXq1nkKsRPidRYfvGGAQTp-0N4=");
      var l;
      t[0] !== a || t[1] !== n || t[2] !== i
        ? ((l = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebProductCollectionCatalogPostcodeChangeModal"), {
                existingPostcode: n,
                catalogId: a,
                onCancel: o("WAWebModalManager").closeModalManager,
                onSuccess: function () {
                  (o("WAWebModalManager").ModalManager.close(), i());
                },
              }),
            );
          }),
          (t[0] = a),
          (t[1] = n),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var u = l,
        d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Change")), (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== u
          ? ((m = c.jsx(r("WAWebClickableLink.react"), {
              onClick: u,
              children: d,
            })),
            (t[5] = u),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.businessDirectConnection,
        a = e.catalogWid,
        i = e.postcodeChangeSuccess;
      r("vulture")("NWZLY-Rha4wcV7i4WRRd5Q8-uCE=");
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["postcode"]), (t[0] = l))
        : (l = t[0]);
      var u = o("useWAWebModelValues").useModelValues(n, l),
        d = u.postcode;
      if (d == null) return null;
      var m;
      t[1] !== d
        ? ((m = s._(/*BTDS*/ "Not available in {area-postcode}.", [
            s._param("area-postcode", d),
          ])),
          (t[1] = d),
          (t[2] = m))
        : (m = t[2]);
      var p;
      t[3] !== a || t[4] !== d || t[5] !== i
        ? ((p = c.jsx(_, {
            postcode: d,
            catalogWid: a,
            postcodeChangeSuccess: i,
          })),
          (t[3] = a),
          (t[4] = d),
          (t[5] = i),
          (t[6] = p))
        : (p = t[6]);
      var f;
      return (
        t[7] !== m || t[8] !== p
          ? ((f = c.jsxs(c.Fragment, { children: [m, "\xA0", p] })),
            (t[7] = m),
            (t[8] = p),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    function g(t) {
      r("vulture")("ARk_zMsOVUKLGZzSCD0L_VSqzOw=");
      var a = t.catalogWid,
        i = t.postcodeChangeSuccess,
        l = p(null),
        s = l[0],
        u = l[1],
        d = r("useBoolean")(!0),
        _ = d.set,
        g = d.value,
        h = r("useWAWebUnmountSignal")();
      return (
        m(
          function () {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var t = yield r(
                      "WAWebBusinessDirectConnectionCollection",
                    ).getCypher(a);
                    if (h.aborted) return;
                    u(t);
                  } catch (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[direct-connection] Setting cypher failed in PDP ",
                            "",
                          ])),
                        t,
                      )
                      .verbose()
                      .sendLogs(
                        "direct-connection-setting-cypher-failed-in-pdp",
                      );
                  }
                  h.aborted || _(!1);
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          },
          [a, _, h],
        ),
        g || s == null
          ? null
          : c.jsx(f, {
              businessDirectConnection: s,
              catalogWid: a,
              postcodeChangeSuccess: i,
            })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
