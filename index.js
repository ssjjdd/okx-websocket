const ws = new WebSocket("wss://ws.okx.com:8443/ws/v5/public")
ws.onopen = function () {
  console.log('θΏζ₯ζε');
  const params = JSON.stringify({
    "op": "subscribe",
    "args": [{
      "channel": "candle1D",
      "instId": "BTC-USDT"
    }]
  })
  ws.send(params)
}
ws.onmessage = function (evt) {
  console.log('evt:', JSON.parse(evt.data));
};
