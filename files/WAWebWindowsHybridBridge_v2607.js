__d(
  "WAWebWindowsHybridBridge.v2607",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2607",
    "WAWebWindowsHybridBridgeAbProps.v2607",
    "WAWebWindowsHybridBridgeAdv.v2607",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2607",
    "WAWebWindowsHybridBridgeConnection.v2607",
    "WAWebWindowsHybridBridgeContacts.v2607",
    "WAWebWindowsHybridBridgeDebugFeatures.v2607",
    "WAWebWindowsHybridBridgeLinksPreview.v2607",
    "WAWebWindowsHybridBridgeMediaFiles.v2607",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2607",
    "WAWebWindowsHybridBridgeNativeAppState.v2607",
    "WAWebWindowsHybridBridgePictures.v2607",
    "WAWebWindowsHybridBridgePreferences.v2607",
    "WAWebWindowsHybridBridgeRateTheApp.v2607",
    "WAWebWindowsHybridBridgeScalingControl.v2607",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2607",
    "WAWebWindowsHybridBridgeSharesheet.v2607",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2607",
    "WAWebWindowsHybridBridgeTouchpadFix.v2607",
    "WAWebWindowsHybridBridgeVoip.v2607",
    "WAWebWindowsHybridBridgeWam.v2607",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2607",
          ).WindowsHybridBridgeAbProps_v2607)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2607",
          ).WindowsHybridBridgeWam_v2607)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2607",
          ).WindowsHybridBridgePreferences_v2607)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2607",
          ).WindowsHybridBridgeScalingControl_v2607)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2607",
          ).WindowsHybridBridgePictures_v2607)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2607",
            ).WindowsHybridBridgeDebugFeatures_v2607)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2607",
          ).VoipWinRTBridge_v2607)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2607",
          ).WAWebWindowsHybridBridgeRateTheApp_v2607)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2607",
          ).WindowsHybridBridgeConnection_v2607)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2607",
          ).WindowsHybridBridgeTouchpadFix_v2607)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2607",
          ).WindowsHybridBridgeLinksPreview_v2607)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2607",
            ).WindowsHybridBridgeContacts_v2607)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2607",
            ).WindowsHybridBridgeContacts_v2607)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2607",
          ).WAWebWindowsHybridBridgeMediaFiles_v2607)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2607",
          ).WAWebWindowsHybridBridgeSharesheet_v2607)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2607",
          ).WindowsHybridAppActivationBridge_v2607)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2607",
          ).WindowsHybridBridgeNativeAppState_v2607)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2607",
          ).WindowsHybridBridgeSystemIntegrations_v2607)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2607",
          ).WindowsHybridBridgeBrowserExtensions_v2607)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2607",
          ).WindowsHybridBridgeSeamlessMigration_v2607)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2607",
          ).WindowsHybridBridgeMediaTranscoder_v2607)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2607",
          ).WindowsHybridBridgeAdv_v2607)(e.hostObjects.AdvBridge)),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2607 = e;
  },
  98,
);
