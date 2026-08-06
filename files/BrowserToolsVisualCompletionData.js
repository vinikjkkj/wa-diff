__d(
  "BrowserToolsVisualCompletionData",
  ["WebAPIs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(t) {
      var n,
        r,
        a = t.children.map(e);
      return {
        children: a,
        hadLateMutationExpected: t.hadLateMutationExpected,
        hadLateMutationUnexpected: t.hadLateMutationUnexpected,
        imgLoadStart: t.imgLoadStart,
        isRoot: t.parent == null,
        latency: t.latency,
        mutationSeq: t.mutationSeq,
        mutationType: t.mutationType,
        pagelet: t == null || (n = t.pagelet) == null ? void 0 : n.name,
        pixels: t.pixels,
        reactStack: t.reactStack,
        rectangle: t.rectangle,
        tagname:
          (r = o("WebAPIs").derefOnlyAttachedElement(
            t == null ? void 0 : t.element,
          )) == null
            ? void 0
            : r.tagName,
        timestamp: t.timestamp,
        type: t.type,
        veid: t.veid,
      };
    }
    function s(t) {
      var n = t.elements.map(e),
        r = t.loadingElements.map(function (e) {
          return { rectangle: e.rectangle, start: e.start, end: e.end };
        }),
        o = {};
      return (
        t.markerPoints.forEach(function (e, t) {
          t !== "speedIndex" &&
            (o[t] = { data: e.data, timestamp: e.timestamp });
        }),
        {
          annotations: t.annotations,
          cssBgScanOverhead: t.cssBgScanOverhead,
          bgChecked: t.bgChecked,
          bgNum: t.bgNum,
          bgPixels: t.bgPixels,
          vcCalculationOverhead: t.vcCalculationOverhead,
          compNum: t.compNum,
          compPixels: t.compPixels,
          elements: n,
          imgNum: t.imgNum,
          imgPixels: t.imgPixels,
          interactionType: t.interactionType,
          loadingElements: r,
          markerPoints: o,
          navComplete: t.navComplete,
          navSequence: t.navSequence,
          paintedPixels: t.paintedPixels,
          qplMarkerId: t.qplMarkerId,
          scrollY: t.scrollY,
          speedIndex: t.speedIndex,
          startTime: t.startTime,
          totalPixels: t.totalPixels,
          traceId: t.traceId,
          tracePolicy: t.tracePolicy,
          vcWithoutImage: t.vcWithoutImage,
          viewport: t.viewport,
          visuallyComplete: t.visuallyComplete,
        }
      );
    }
    l.toSerializable = s;
  },
  98,
);
