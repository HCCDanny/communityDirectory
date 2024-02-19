import axios from "axios";

export async function getDirectoryData(service) {
  const res = await axios
    .post(
      "https://prod-15.uksouth.logic.azure.com:443/workflows/a9315cbf52f44eaeb1226a2b14f48fc3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=erTsAm0CHq9wHtLdtjMr8mhdlkN_cf0uTFxk71bLro4",
      {
        service,
      },
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  return res;
}
