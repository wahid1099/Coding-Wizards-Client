import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//Teacher getting all request from student
export const GetExtraCareRequest = createAsyncThunk(
  "Teacher/getExtraCareRequest",
  async (teacherclass) => {
    const response = await fetch(
      `http://localhost:5000/requestCare?teacherclass=${teacherclass}`
    ).then((res) => res.json());
    return response;
  }
);

// Publish notice from teachers
export const noticePublishFromTeacher = createAsyncThunk(
  "Teacher/PublishNotice",
  async (data) => {
    const response = await fetch(
      "http://localhost:5000/PublishNotice",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);

// Get the current teacher
export const getTeacherInfo = createAsyncThunk(
  "Teacher/TeacherProfile",
  async (email) => {
    const response = await fetch(
      `http://localhost:5000/TeacherProfile?email=${email}`
    ).then((res) => res.json());
    return response;
  }
);

// Update profile picture
export const updateTeacherDP = createAsyncThunk(
  "Teacher/UpdateTeacherDP",
  async (data) => {
    console.log("Hitted", data);
    const response = await fetch(
      `http://localhost:5000/UpdateTeacherDP?email=${data.email}`,
      {
        method: "PUT",
        body: data.fd,
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  }
);

// Add teachers information
export const addTeacherInfo = createAsyncThunk(
  "Teacher/AddTeacherInfo",
  async (data) => {
    const response = await fetch(
      `http://localhost:5000/AddTeacherInfo?email=${data.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  }
);

//Result Publish For Student
export const PublishResult = createAsyncThunk(
  "Teacher/PublishResult",
  async (data) => {
    console.log("hitted result", data);
    const response = await fetch(
      "http://localhost:5000/PublishResult",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);

//Get Individual Care of Student
export const GetIndividualCare = createAsyncThunk(
  "Teacher/GetIndividualCare",
  async (id) => {
    const response = await fetch(
      `http://localhost:5000/GetIndividualCare/${id}`
    )
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);
//Teacher changing status of Request care
export const ChangeRequestHandler = createAsyncThunk(
  "Teacher/ChangeRequestHandler",
  async (data) => {
    const response = await fetch(
      `http://localhost:5000/ChangeRequestHandler?status=${data.status}&&id=${data.id}`
    )
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);
// Publish assing from teachers
export const assignmentPublish = createAsyncThunk(
  "Teacher/assignmentPublish",
  async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:5000/assignmentPublish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
    return response;
  }
);
//Teacher geting all previous Assignment
export const GetingPreviosuAssignment = createAsyncThunk(
  "Teacher/GetingPreviosuAssignment",
  async () => {
    const response = await fetch(
      "http://localhost:5000/GetingPreviosuAssignment"
    ).then((res) => res.json());
    return response;
  }
);
//Teacher Publisshing image assingment
export const PublishImageAssing = createAsyncThunk(
  "Teacher/PublishImageAssing",
  async (fd) => {
    const response = await fetch("http://localhost:5000/PublishImageAssing", {
      method: "POST",
      body: fd,
    })
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);
// Delete A DeleteAssignment
export const DeleteAssignment = createAsyncThunk(
  "Teacher/DeleteAssignment",
  async (id) => {
    const response = await fetch(
      `http://localhost:5000/DeleteAssignment/${id}`,
      {
        method: "DELETE",
      }
    );
    return response;
  }
);

//Teacher adding to library
export const AddBooks = createAsyncThunk("Teacher/AddBooks", async (data) => {
  const response = await fetch("http://localhost:5000/AddBook", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .catch((error) => {
      Swal.fire("!", "Error!", "error");
    });
      return response
    }
);
//Teacher geting all books
export const GetAllBooks = createAsyncThunk(
  "Teacher/GetAllBooks",
  async () => {
    const response = await fetch("http://localhost:5000/GetAllBooks")
      .then((res) => res.json())
      .catch((error) => {
        Swal.fire("!", "Error!", "error");
      });
    return response;
  }
);

//Teacher Get Edit Book library 
export const SubmitEditedBook = createAsyncThunk(
    'Teacher/SubmitEditedBook',
    async (data) => {
      const response = await fetch(`http://localhost:5000/SubmitEditedBook/${data.id}`,{
          method: 'PUT',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(data.book)
          
      }).then(res=> res.json()).catch(error => {
        Swal.fire(
            '!',
            'Error!',
            'error'
          )
    });
      return response
    }
);
const initialState = {
    value: 0,
    extraCares: [],
    teacherInfo: {},
    IndividualCare: {},
    assignments:[],
    Books: [],
};

export const TeacherReducer = createSlice({
  name: "Teacher",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    extraReducers: (builder) => {
        builder.addCase(GetExtraCareRequest.fulfilled, (state, action) => {
            state.extraCares = action.payload;
        });
        builder.addCase(noticePublishFromTeacher.fulfilled, (state, action) => {
            Swal.fire("Success", "Notice Published Successfully", "success");
        });
        builder.addCase(getTeacherInfo.fulfilled, (state, action) => {
            state.teacherInfo = action.payload;
        });
        builder.addCase(updateTeacherDP.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Profile Picture Updated Successfully",
                "success"
            );
        });
        builder.addCase(addTeacherInfo.fulfilled, (state, action) => {
            Swal.fire("Success", "Information Updated Successfully", "success");
        });
        builder.addCase(PublishResult.fulfilled, (state, action) => {
            Swal.fire(
              'Success',
              'Result Publish Success',
              'success'
            )
        });
        builder.addCase(GetIndividualCare.fulfilled, (state, action) => {
            state.IndividualCare = action.payload
        });
        builder.addCase(ChangeRequestHandler.fulfilled, (state, action) => {
            console.log('Status', action.payload)
            Swal.fire(
                "Success",
                "",
                "success"
            );
        }); 
        builder.addCase(assignmentPublish.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Assignment Published Successfully ",
                "success"
            );
        });
        builder.addCase(PublishImageAssing.fulfilled, (state, action) => {
            Swal.fire(
              'Success',
              'Assingment img Publish Successfull',
              'success'
            )
          })
        builder.addCase(GetingPreviosuAssignment.fulfilled, (state, action) => {
        state.assignments = action.payload
        })
        builder.addCase(DeleteAssignment.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Class Routine deleted successfully",
                "success"
            );
        });
        builder.addCase(AddBooks.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Book Added Successfull",
                "success"
            );
        });
        builder.addCase(GetAllBooks.fulfilled, (state, action) => {
            state.Books = action.payload
        });

        builder.addCase(SubmitEditedBook.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Book Updated Successfull",
                "success"
            );
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetExtraCareRequest.fulfilled, (state, action) => {
      state.extraCares = action.payload;
    });
    builder.addCase(noticePublishFromTeacher.fulfilled, (state, action) => {
      Swal.fire("Success", "Notice Published Successfully", "success");
    });
    builder.addCase(getTeacherInfo.fulfilled, (state, action) => {
      state.teacherInfo = action.payload;
    });
    builder.addCase(updateTeacherDP.fulfilled, (state, action) => {
      Swal.fire("Success", "Profile Picture Updated Successfully", "success");
    });
    builder.addCase(addTeacherInfo.fulfilled, (state, action) => {
      Swal.fire("Success", "Information Updated Successfully", "success");
    });
    builder.addCase(PublishResult.fulfilled, (state, action) => {
      Swal.fire("Success", "Result Publish Success", "success");
    });
    builder.addCase(GetIndividualCare.fulfilled, (state, action) => {
      state.IndividualCare = action.payload;
    });
    builder.addCase(ChangeRequestHandler.fulfilled, (state, action) => {
      console.log("Status", action.payload);
      Swal.fire("Success", "", "success");
    });
    builder.addCase(assignmentPublish.fulfilled, (state, action) => {
      Swal.fire("Success", "Assignment Published Successfully ", "success");
    });
    builder.addCase(PublishImageAssing.fulfilled, (state, action) => {
      Swal.fire("Success", "Assingment img Publish Successfull", "success");
    });
    builder.addCase(GetingPreviosuAssignment.fulfilled, (state, action) => {
      state.assignments = action.payload;
    });
    builder.addCase(DeleteAssignment.fulfilled, (state, action) => {
      Swal.fire("Success", "Class Routine deleted successfully", "success");
    });
    builder.addCase(AddBooks.fulfilled, (state, action) => {
      Swal.fire("Success", "Book Added Successfull", "success");
    });
    builder.addCase(GetAllBooks.fulfilled, (state, action) => {
      state.Books = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  TeacherReducer.actions;

export default TeacherReducer.reducer;