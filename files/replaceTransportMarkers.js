__d(
  "replaceTransportMarkers",
  ["BanzaiLazyQueue", "ge", "memoize"],
  function (t, n, r, o, a, i, l) {
    var e = new Set();
    function s(t, a, i) {
      var l = i !== void 0 ? a[i] : a,
        u;
      if (Array.isArray(l)) for (u = 0; u < l.length; u++) s(t, l, u);
      else if (l && typeof l == "object")
        if (l.__m)
          l.__lazy
            ? (a[i] = r("memoize")(n.bind(null, l.__m)))
            : (a[i] = n.call(null, l.__m));
        else if (l.__jsr)
          a[i] = new (n.call(null, "JSResourceReferenceImpl"))(
            l.__jsr,
          ).__setRef("replaceTransportMarkers");
        else if (l.__dr)
          a[i] = new (n.call(null, "RequireDeferredReference"))(
            l.__dr,
          ).__setRef("replaceTransportMarkers");
        else if (l.__rc)
          (l.__rc[0] === null
            ? (a[i] = null)
            : (a[i] = n.call(null, l.__rc[0])),
            l.__rc[1] &&
              (e.has(l.__rc[1]) ||
                (e.add(l.__rc[1]),
                o("BanzaiLazyQueue").queuePost(
                  "require_cond_exposure_logging",
                  { identifier: l.__rc[1] },
                ))));
        else if (l.__e) a[i] = r("ge")(l.__e);
        else if (l.__rel) a[i] = t.relativeTo;
        else if (l.__bigPipeContext) a[i] = t.bigPipeContext;
        else if (l.__bbox) a[i] = l.__bbox;
        else {
          for (var c in l) s(t, l, c);
          if (l.__map) a[i] = new Map(l.__map);
          else if (l.__set) a[i] = new Set(l.__set);
          else if (l.__imm) {
            var d = l.__imm,
              m = d.method,
              p = d.value;
            a[i] = n.call(null, "immutable")[m](p);
          }
        }
    }
    l.default = s;
  },
  98,
);
