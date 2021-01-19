const getMock = jest.fn().mockResolvedValue({
  data: {
    shops: [
      {
        name: "Portland",
        image: "portland",
        address: "Avenue Portland, 123",
      },
      {
        name: "Astoria",
        image: "astoria",
        address: "Avenue Astoria, 123",
      },
      {
        name: "",
        image: "none",
        address: "N/A",
      },
    ],
  },
});

const axiosMock = {
  get: getMock,
};

export default axiosMock;
