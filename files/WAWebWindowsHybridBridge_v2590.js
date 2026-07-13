__d(
  "WAWebWindowsHybridBridge.v2590",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2590",
    "WAWebWindowsHybridBridgeAbProps.v2590",
    "WAWebWindowsHybridBridgeAdv.v2590",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2590",
    "WAWebWindowsHybridBridgeConnection.v2590",
    "WAWebWindowsHybridBridgeContacts.v2590",
    "WAWebWindowsHybridBridgeDebugFeatures.v2590",
    "WAWebWindowsHybridBridgeLinksPreview.v2590",
    "WAWebWindowsHybridBridgeMediaFiles.v2590",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2590",
    "WAWebWindowsHybridBridgeNativeAppState.v2590",
    "WAWebWindowsHybridBridgePictures.v2590",
    "WAWebWindowsHybridBridgePreferences.v2590",
    "WAWebWindowsHybridBridgeRateTheApp.v2590",
    "WAWebWindowsHybridBridgeScalingControl.v2590",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2590",
    "WAWebWindowsHybridBridgeSharesheet.v2590",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2590",
    "WAWebWindowsHybridBridgeTouchpadFix.v2590",
    "WAWebWindowsHybridBridgeVoip.v2590",
    "WAWebWindowsHybridBridgeWam.v2590",
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
            "WAWebWindowsHybridBridgeAbProps.v2590",
          ).WindowsHybridBridgeAbProps_v2590)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2590",
          ).WindowsHybridBridgeWam_v2590)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2590",
          ).WindowsHybridBridgePreferences_v2590)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2590",
          ).WindowsHybridBridgeScalingControl_v2590)(l));
        var s = e.hostObjects.PicturesBridge;
        s &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2590",
          ).WindowsHybridBridgePictures_v2590)(s));
        var u = e.hostObjects.DebugFeaturesBridge,
          c = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        u != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2590",
            ).WindowsHybridBridgeDebugFeatures_v2590)(u))
          : c != null;
        var d = e.hostObjects.VoipBridge,
          m = e.hostObjects.VoipSignalingBridge;
        (d &&
          m &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2590",
          ).VoipWinRTBridge_v2590)(d, m)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2590",
          ).WAWebWindowsHybridBridgeRateTheApp_v2590)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2590",
          ).WindowsHybridBridgeConnection_v2590)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2590",
          ).WindowsHybridBridgeTouchpadFix_v2590)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2590",
          ).WindowsHybridBridgeLinksPreview_v2590)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var p = e.hostObjects.sync.PopulatedContactsBridge,
            _ = e.hostObjects.PopulatedContactsBridge;
          _ != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2590",
            ).WindowsHybridBridgeContacts_v2590)(_, p, !0));
        } catch (t) {
          var f = e.hostObjects.ContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2590",
            ).WindowsHybridBridgeContacts_v2590)(
              f,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var g = e.hostObjects.MediaFilesBridge;
        g != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2590",
          ).WAWebWindowsHybridBridgeMediaFiles_v2590)(g));
        var h = e.hostObjects.SharesheetBridge;
        h != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2590",
          ).WAWebWindowsHybridBridgeSharesheet_v2590)(h));
        var y = e.hostObjects.AppActivationBridge;
        y != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2590",
          ).WindowsHybridAppActivationBridge_v2590)(y));
        var C = e.hostObjects.NativeAppStateBridge,
          b = e.hostObjects.sync.NativeAppStateBridge;
        C != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2590",
          ).WindowsHybridBridgeNativeAppState_v2590)(C, b));
        var v = e.hostObjects.SystemIntegrationsBridge;
        v &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2590",
          ).WindowsHybridBridgeSystemIntegrations_v2590)(v));
        var S = e.hostObjects.BrowserExtensionsBridge;
        S &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2590",
          ).WindowsHybridBridgeBrowserExtensions_v2590)(S));
        var R = e.hostObjects.SeamlessMigrationBridge;
        R &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2590",
          ).WindowsHybridBridgeSeamlessMigration_v2590)(R));
        var L = e.hostObjects.MediaTranscodingBridge;
        (L &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2590",
          ).WindowsHybridBridgeMediaTranscoder_v2590)(e, L)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2590",
          ).WindowsHybridBridgeAdv_v2590)(e.hostObjects.AdvBridge)),
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
    l.WindowsHybridBridge_v2590 = e;
  },
  98,
);
