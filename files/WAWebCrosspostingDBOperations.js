__d(
  "WAWebCrosspostingDBOperations",
  ["WAWebCrossposting.flow", "WAWebCrosspostingSchema", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebCrosspostingSchema").getTable().createOrReplace(e);
    }
    async function s(e, t) {
      return o("WAWebCrosspostingSchema").getTable().get([e, t]);
    }
    async function u(e) {
      var t = await o("WAWebCrosspostingSchema")
        .getTable()
        .anyOf(["statusMessageId"], [e]);
      return t.map(function (e) {
        return e.crosspostingStatusUniqueId;
      });
    }
    function c(e) {
      var t = e.crosspostingDestination,
        n = e.crosspostingState,
        a = e.directUrlPath,
        i = e.statusMessageId,
        l = e.uniqueId;
      return n === o("WAWebCrossposting.flow").CrosspostingState.SUCCESS
        ? a == null
          ? Promise.reject(
              r("err")(
                "directUrlPath is required when crosspostingState is CROSSPOSTING_REQUEST_SUCCESS",
              ),
            )
          : o("WAWebCrosspostingSchema")
              .getTable()
              .createOrMerge([i, t], {
                statusMessageId: i,
                crosspostingDestination: t,
                crosspostingStatusUniqueId: l,
                crosspostingState: n,
                directUrlPath: a,
              })
        : o("WAWebCrosspostingSchema")
            .getTable()
            .createOrMerge([i, t], {
              statusMessageId: i,
              crosspostingDestination: t,
              crosspostingStatusUniqueId: l,
              crosspostingState: n,
            });
    }
    function d(e, t, n) {
      return o("WAWebCrosspostingSchema")
        .getTable()
        .createOrMerge([t, n], {
          statusMessageId: t,
          crosspostingDestination: n,
          crosspostingStatusUniqueId: e,
        });
    }
    function m(e) {
      var t = e.crosspostingDestination,
        n = e.directUrlPath,
        r = e.statusMessageId;
      return o("WAWebCrosspostingSchema")
        .getTable()
        .merge([r, t], {
          statusMessageId: r,
          crosspostingDestination: t,
          directUrlPath: n,
        });
    }
    function p(e) {
      var t = e.crosspostingDestination,
        n = e.crosspostingState,
        a = e.directUrlPath,
        i = e.statusMessageId;
      return n === o("WAWebCrossposting.flow").CrosspostingState.SUCCESS
        ? a == null
          ? Promise.reject(
              r("err")(
                "directUrlPath is required when crosspostingState is CROSSPOSTING_REQUEST_SUCCESS",
              ),
            )
          : o("WAWebCrosspostingSchema")
              .getTable()
              .merge([i, t], {
                statusMessageId: i,
                crosspostingDestination: t,
                crosspostingState: n,
                directUrlPath: a,
              })
        : o("WAWebCrosspostingSchema")
            .getTable()
            .merge([i, t], {
              statusMessageId: i,
              crosspostingDestination: t,
              crosspostingState: n,
            });
    }
    async function _(e) {
      if (e.length !== 0) {
        for (
          var t = e.map(function (e) {
              return [e.statusMessageId, e.crosspostingDestination];
            }),
            n = await o("WAWebCrosspostingSchema").getTable().bulkGet(t),
            r = [],
            a = 0;
          a < e.length;
          a++
        ) {
          var i = e[a],
            l = n[a];
          l == null ||
            l.crosspostingStatusUniqueId !== i.uniqueId ||
            r.push(
              o("WAWebCrosspostingSchema")
                .getTable()
                .merge([i.statusMessageId, i.crosspostingDestination], {
                  statusMessageId: i.statusMessageId,
                  crosspostingDestination: i.crosspostingDestination,
                  crosspostingState: i.crosspostingState,
                }),
            );
        }
        r.length > 0 && (await Promise.all(r));
      }
    }
    async function f(e) {
      if (e.length === 0) return new Map();
      var t = await o("WAWebCrosspostingSchema")
          .getTable()
          .anyOf(["statusMessageId"], e),
        n = new Map();
      for (var r of t) {
        var a = n.get(r.statusMessageId);
        (a == null && ((a = new Map()), n.set(r.statusMessageId, a)),
          a.set(r.crosspostingDestination, {
            crosspostingState: r.crosspostingState,
          }));
      }
      return n;
    }
    async function g(e) {
      var t,
        n = await f([e]);
      return (t = n.get(e)) != null ? t : null;
    }
    ((l.createOrReplaceCrossposting = e),
      (l.getCrosspostingData = s),
      (l.getCrosspostingUniqueIds = u),
      (l.updateCrosspostingUniqueIdWithState = c),
      (l.updateCrosspostingUniqueId = d),
      (l.updateDirectUrlPath = m),
      (l.updateCrosspostingState = p),
      (l.bulkUpdateCrosspostingState = _),
      (l.getCrosspostingInfoForMessagesBulk = f),
      (l.getCrosspostingInfoForMessage = g));
  },
  98,
);
