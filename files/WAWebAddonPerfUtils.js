__d(
  "WAWebAddonPerfUtils",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebQplFlowWrapper",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891434079, "3254"),
      s = r("qpl")._(891434096, "3255"),
      u = r("qpl")._(891428956, "3256"),
      c = n("$InternalEnum")({
        BulkUpsert: "bulk_upsert",
        BulkRemoveByParents: "bulk_remove_by_parents",
        BulkGetByParentMsgKeys: "bulk_get_by_parent_msg_keys",
        BulkGetByChatWid: "bulk_get_by_chat_wid",
        BulkGetParentMsgs: "bulk_get_parent_msgs",
      }),
      d = n("$InternalEnum").Mirrored(["Incoming", "Outgoing", "UI"]);
    function m(e) {
      return e < 10001
        ? 1e4
        : e < 30001
          ? 3e4
          : e < 500001
            ? 5e4
            : e < 1000001
              ? 1e5
              : e < 3000001
                ? 3e5
                : e < 5000001
                  ? 5e5
                  : e < 8000001
                    ? 8e5
                    : 1e6;
    }
    var p = { date: 0, values: new Map() };
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p,
            n = new Date().setHours(0, 0, 0, 0);
          if (t.date === n) {
            var r = t.values.get(e);
            if (r == null) {
              var a = m(
                yield o("WAWebAddonDBTable").addonInternalDBTable.getTableSize(
                  e,
                ),
              );
              return (t.values.set(e, a), a);
            }
            return r;
          }
          ((t.date = n), t.values.clear());
          var i = m(
            yield o("WAWebAddonDBTable").addonInternalDBTable.getTableSize(e),
          );
          return (t.values.set(e, i), i);
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = "messages",
            t = p,
            n = new Date().setHours(0, 0, 0, 0);
          if (t.date === n) {
            var r = t.values.get(e);
            if (r == null) {
              var a = m(
                yield o("WAWebSchemaMessage").getMessageTable().count(),
              );
              return (t.values.set(e, a), a);
            }
            return r;
          }
          ((t.date = n), t.values.clear());
          var i = m(yield o("WAWebSchemaMessage").getMessageTable().count());
          return (t.values.set(e, i), i);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return {
            string: {
              request_type: c.getName(e.type),
              table_mode: o("WAWebAddonConstants").AddonTableMode.getName(
                e.mode,
              ),
            },
            int: { request_size: e.size, table_size: yield _(e.mode) },
          };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return {
            string: { request_type: c.getName(e.type), table_mode: "messages" },
            int: { request_size: e.size, table_size: yield g() },
          };
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "addon_infra_enable_perf_logging",
      );
    }
    function R(e) {
      var t = Math.random();
      return t <= e / 100;
    }
    function L(e, t) {
      switch (e) {
        case d.Incoming:
          return t === o("WAWebAddonConstants").AddonTableMode.Reaction
            ? R(3)
            : R(10);
        case d.Outgoing:
          return R(25);
        case d.UI:
          return R(1);
      }
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (S() && L(t, n)) {
            var i = yield a(),
              l;
            switch (t) {
              case d.Incoming:
                l = s;
                break;
              case d.Outgoing:
                l = u;
                break;
              case d.UI:
                l = e;
                break;
            }
            var c = o("WAWebQplFlowWrapper").QPL.markerStart(
              r("WANullthrows")(l),
              { annotations: i },
            );
            return {
              success: function () {
                return c.end(2);
              },
              fail: function () {
                return c.end(3);
              },
            };
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E(e, t.mode, function () {
            return y(t);
          });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return E(
            e,
            o("WAWebAddonConstants").AddonTableMode.None,
            function () {
              return b(t);
            },
          );
        })),
        x.apply(this, arguments)
      );
    }
    ((l.AnnotationRequestType = c),
      (l.AddonQplMarkerType = d),
      (l.getCachedTableSize = _),
      (l.createAddonQplMarker = I),
      (l.createMessagesQplMarker = D));
  },
  98,
);
