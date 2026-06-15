__d(
  "WAWebForceFlushWamBuffers",
  [
    "WALogger",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebWamFalcoLogger",
    "WAWebWebWamForceFlushWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      (t === void 0 && (t = !0),
        new (o("WAWebWebWamForceFlushWamEvent").WebWamForceFlushWamEvent)()
          .commitAndWaitForFlush(!0)
          .finally(function () {
            return o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "force flushed all wam buffers",
                  ])),
              )
              .tags("wam");
          }),
        t
          ? o("WAWebWamFalcoLogger").flushFalcoForLogout()
          : o("WAWebCanonicalUtils").isCanonicalPresent() &&
            o("WAWebCanonicalWamFalcoBuffer").drainCanonicalWamFalcoBuffer());
    }
    l.forceFlushAllWamAndQplBuffers = s;
  },
  98,
);
