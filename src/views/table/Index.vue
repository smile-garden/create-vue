<template>
  <div>
    <Table :columns="columns10" :data="data9"></Table>
    <br>
    <hr />
    <br>
    <Table border :columns="columns5" :data="data5"></Table>
  </div>
</template>
<script>
import expandRow from "./TableExpand.vue";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { expandRow },
  data() {
    return {
      columns5: [
        {
          title: "Date",
          key: "date",
          sortable: true
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          sortable: true
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      columns10: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            console.log(h, "h");
            console.log(params, "params");
            return h(
              expandRow,
              {
                props: {
                  weiyi: params.row
                }
              },
              "哈哈哈"
            );
          }
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data9: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          job: "Data engineer",
          interest: "badminton",
          birthday: "1991-05-14",
          book: "Steve Jobs",
          movie: "The Prestige",
          music: "I Cry"
        },
        {
          name: "Jim Green",
          age: 25,
          address: "London No. 1 Lake Park",
          job: "Data Scientist",
          interest: "volleyball",
          birthday: "1989-03-18",
          book: "My Struggle",
          movie: "Roman Holiday",
          music: "My Heart Will Go On"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          job: "Data Product Manager",
          interest: "tennis",
          birthday: "1992-01-31",
          book: "Win",
          movie: "Jobs",
          music: "Don’t Cry"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          job: "Data Analyst",
          interest: "snooker",
          birthday: "1988-7-25",
          book: "A Dream in Red Mansions",
          movie: "A Chinese Ghost Story",
          music: "actor"
        }
      ]
    };
  }
};
</script>
