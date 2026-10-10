__d(
  "WAWebHatchBrowserTask",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "activity_title",
        "browser_task_id",
        "display_state",
        "display_status",
        "owner_kind",
        "status",
        "terminal_reason",
        "title",
      ],
      s = ["queue_position", "updated_at_ms", "version"],
      u = "computer.updated";
    function c(e) {
      var t = o("WAWebHatchJsonReaders").readArray(e, "tasks");
      if (t == null) return null;
      var n = [],
        r = 0;
      for (var a of t) {
        if (!p(a)) {
          r++;
          continue;
        }
        var i = m(a);
        i != null && n.push(i);
      }
      return { malformedCount: r, tasks: n };
    }
    function d(e, t) {
      return e === u ? c(t) : null;
    }
    function m(e) {
      var t,
        n = o("WAWebHatchJsonReaders").readString(e, "browser_task_id");
      if (n == null || n === "") return null;
      var r = o("WAWebHatchJsonReaders").readObject(e, "current_site");
      return {
        browserTaskID: n,
        title:
          (t = o("WAWebHatchJsonReaders").readString(e, "title")) != null
            ? t
            : "",
        displayState: o("WAWebHatchJsonReaders").readString(e, "display_state"),
        displayStatus: o("WAWebHatchJsonReaders").readString(
          e,
          "display_status",
        ),
        status: o("WAWebHatchJsonReaders").readString(e, "status"),
        activityTitle: o("WAWebHatchJsonReaders").readString(
          e,
          "activity_title",
        ),
        terminalReason: o("WAWebHatchJsonReaders").readString(
          e,
          "terminal_reason",
        ),
        queuePosition: o("WAWebHatchJsonReaders").readNumber(
          e,
          "queue_position",
        ),
        ownerKind: o("WAWebHatchJsonReaders").readString(e, "owner_kind"),
        siteDomain: o("WAWebHatchJsonReaders").readString(r, "domain"),
        pageTitle: o("WAWebHatchJsonReaders").readString(r, "page_title"),
        screenshotURL: o("WAWebHatchJsonReaders").readString(
          o("WAWebHatchJsonReaders").readObject(e, "latest_screenshot"),
          "url",
        ),
        updatedAtMs: o("WAWebHatchJsonReaders").readNumber(e, "updated_at_ms"),
        version: o("WAWebHatchJsonReaders").readNumber(e, "version"),
        previewAvailable: o("WAWebHatchJsonReaders").readBool(
          e,
          "preview_available",
        ),
      };
    }
    function p(t) {
      return (
        o("WAWebHatchJsonReaders").isObject(t) &&
        e.every(function (e) {
          return g(
            o("WAWebHatchJsonReaders").readField(t, e),
            o("WATypeUtils").isString,
          );
        }) &&
        s.every(function (e) {
          return g(o("WAWebHatchJsonReaders").readField(t, e), function (e) {
            return Number.isInteger(e);
          });
        }) &&
        g(
          o("WAWebHatchJsonReaders").readField(t, "preview_available"),
          function (e) {
            return typeof e == "boolean";
          },
        ) &&
        g(o("WAWebHatchJsonReaders").readField(t, "current_site"), _) &&
        g(o("WAWebHatchJsonReaders").readField(t, "latest_screenshot"), f)
      );
    }
    function _(e) {
      return (
        o("WAWebHatchJsonReaders").isObject(e) &&
        g(
          o("WAWebHatchJsonReaders").readField(e, "domain"),
          o("WATypeUtils").isString,
        ) &&
        g(
          o("WAWebHatchJsonReaders").readField(e, "page_title"),
          o("WATypeUtils").isString,
        )
      );
    }
    function f(e) {
      return (
        o("WAWebHatchJsonReaders").isObject(e) &&
        g(
          o("WAWebHatchJsonReaders").readField(e, "url"),
          o("WATypeUtils").isString,
        )
      );
    }
    function g(e, t) {
      return e == null || t(e);
    }
    ((l.COMPUTER_UPDATED = u),
      (l.decodeHatchBrowserTasks = c),
      (l.decodeHatchComputerEvent = d));
  },
  98,
);
